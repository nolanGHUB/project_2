import React, { Component } from 'react'

//api calls
import { SearchTvById, SearchSimilarTvById, SearchTvCredits, SearchIdForVideo } from '../services/api-helper'

//custom components
import Similar from './Similar'
import Trailer from './Trailer'
import Modal from './Modal'

class ShowDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idResults: [],
      castList: [],
      similarResults: [],
      baseImgPath: "https://image.tmdb.org/t/p/w",
      imgSize: "300",
      id: this.props.match.params.showId,
      hasDetailsLoaded: false,
      hasSimilarLoaded: false,
      hasCastLoaded: false,
      hasTrailerLoaded: false,
      isMiniseries: false,
      creator: "",
      network: "",
      ended: false,
      trailerKey: "",
      trailerRequested: false,
      showModal: false,
    }
  }
  async componentDidMount() {
    await this.getDetails();
    await this.getSimilar();
    await this.getCast();
    await this.getVideo();
  }

  //  componentDidUpdate = (prevProps) =>{
  //     let oldId = prevProps.match.params.showId
  //     let newId = this.props.match.params.showId
  //     if (newId !== oldId) {
  //       console.log("FETCH NEW DATA ON DID UPDATE")
  //       this.props.fetchResource();
  //       console.log("AFTER GETDETAILS")
  //     }
  //   }

  getCast = async () => {
    const castList = await SearchTvCredits(this.state.id);
    if (castList.length > 5) {
      castList.length = 5
    }

    let castNames = [];
    castList.map((member, key) =>
      castNames.push(member.name)
    )

    this.setState({
      castList: castNames,
      hasCastLoaded: true
    })
  }

  getSimilar = async () => {
    const similarResults = await SearchSimilarTvById(this.state.id);
    this.setState({
      similarResults,
      hasSimilarLoaded: true,
    })
  }

  getVideo = async () => {
    const videoResults = await SearchIdForVideo(this.state.id);
    const filteredResults = videoResults.filter(result =>
      result.type === "Trailer" && result.site === "YouTube"
    )

    const singleResult = filteredResults.pop();
    if (singleResult) {
      const trailerKey = singleResult.key;
      this.setState({
        trailerKey,
        hasTrailerLoaded: true,
      })
    }

  }

  getDetails = async () => {
    const idResults = await SearchTvById(this.state.id);
    if (idResults.created_by[0]) {
      this.setState({
        creator: idResults.created_by[0].name,
      })
    }
    if (idResults.networks[0]) {
      this.setState({
        network: idResults.networks[0].name,
      })
    }
    if (idResults.type === "Miniseries") {
      this.setState({
        isMiniseries: true
      })
    }
    if (idResults.status === "Ended") {
      this.setState({
        ended: true,
      })
    }
    this.setState({
      idResults,
      hasDetailsLoaded: true,
    })
  }

  onClick = () => {
    this.setState({
      trailerRequested: true,
    })
  }

  showModal = e => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  addListener = () => {
    document.addEventListener("click", this.showModal);
    document.querySelector("body").classList.toggle("dim");
  }

  toggleDim = () => {
    console.log(document.querySelector('.trailer'));
  }

  removeListener = () => {
    document.removeEventListener("click", this.showModal);
    document.querySelector("body").classList.remove("dim");
  }

  generateModal = () => {
    return (
      <div>
        <Modal
          showModal={this.state.showModal}
          onClose={this.showModal}
        >
          <Trailer
            videoKey={this.state.trailerKey}
          />
        </Modal>
        <div className="modal-overlay"></div>
      </div>
    )
  }

  render() {
    return (
      <div className="details">
        {this.state.showModal
          ?
          this.addListener()
          :
          this.removeListener()
        }

        {this.state.hasDetailsLoaded &&
          <main className="details-img-and-text-wrapper">

            <div className="details-img">
              <img src={`${this.state.baseImgPath}${this.state.imgSize}${this.state.idResults.poster_path}`} alt="tvPoster" />
            </div>

            <div className="details-text">
              <div className="details-title">
                {this.state.idResults.name}
              </div>

              <div className="details-overview">
                {this.state.idResults.overview}
              </div>

              <div className="details-info">
                <div className="details-info-left">
                  <div className="details-created-and-starring">
                    <div className="details-info-text">
                      {this.state.isMiniseries &&
                        this.state.idResults.type}
                    </div>
                    {this.state.creator &&
                      <div className="details-info-header details-info-column" >CREATED BY: <span className="details-info-text">{this.state.creator}</span></div>
                    }
                    <div className="details-info-header details-info-column">STARRING:</div>
                    {this.state.castList.map((name, key) =>
                      <div className="details-info-text" key={key}>
                        {name}
                      </div>
                    )}
                  </div>
                  {this.state.hasTrailerLoaded &&
                    <div className="trailer-button-wrapper">
                      <button className="search-button toggle-button" onClick={this.showModal}>WATCH TRAILER</button>
                    </div>
                  }
                </div>
                <div className="details-info-right">
                  {this.state.network &&
                    <div className="details-info-header details-info-column">NETWORK: <span className="details-info-text">{this.state.network}</span></div>
                  }
                  <div className="details-info-header details-info-column">RUN TIME: <span className="details-info-text">{this.state.idResults.episode_run_time[0]} minutes</span></div>
                  <div className="details-info-header details-info-column">EPISODES: <span className="details-info-text">{this.state.idResults.number_of_episodes}</span></div>
                  <div className="details-info-header details-info-column">SEASONS: <span className="details-info-text">{this.state.idResults.number_of_seasons}</span></div>
                  <div className="details-info-header details-info-column">AIR DATE: <span className="details-info-text">{this.state.idResults.first_air_date}</span></div>

                  {/* <div className="details-info-header details-info-column">WHERE TO WATCH:</div> */}
                  {this.state.ended && <div>No longer on the air</div>}
                  {this.state.idResults.next_episode_to_air && <div className="details-info-header details-info-column">NEXT EPISODE: <span className="details-info-text">{this.state.idResults.next_episode_to_air.name} @ {this.state.idResults.next_episode_to_air.air_date}</span></div>}
                </div>
              </div>
            </div>
          </main>
        }

        <div className="modal-wrapper">
          {this.state.hasTrailerLoaded && this.state.trailerKey && this.state.showModal &&
            this.generateModal()
          }
        </div>



        {this.state.hasSimilarLoaded &&
          <div>
            <Similar
              similar={this.state.similarResults}
              imgPath={this.state.baseImgPath}
              imgSize={this.state.imgSize}
            />
          </div>
        }
      </div>
    )
  }
}

export default ShowDetails