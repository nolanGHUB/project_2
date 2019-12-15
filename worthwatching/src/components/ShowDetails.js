import React, {Component} from 'react'

//api calls
import { SearchTvById, SearchSimilarTvById } from '../services/api-helper'

class ShowDetails extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      idResults: [],
      similarResults: [],
      baseImgPath: "https://image.tmdb.org/t/p/w",
      imgSize: "300",
      id: this.props.match.params.showId,
      hasDetailsLoaded: false,
      hasSimilarLoaded: false,
      isMiniseries: false,
      creator: "",
      network: "",
      ended: false
    }
  }
  async componentDidMount() {
    await this.getDetails();
    await this.getSimilar();
  }

  getSimilar = async () => {
    const similarResults = await SearchSimilarTvById(this.state.id);
    this.setState({
      similarResults,
      hasSimilarLoaded: true,
    })
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
        ended: true
      })
    }
    this.setState({
      idResults,
      hasDetailsLoaded: true
    })
  }

  render() {
    // console.log(this.state.idResults)
    return (
      <div className="details">
        <div className="details-img-and-text-wrapper">
          <div className="details-img">
            <img src={`${this.state.baseImgPath}${this.state.imgSize}${this.state.idResults.poster_path}`} alt="tvPoster" />
          </div>
          <div className="details-text">
            {this.state.hasDetailsLoaded &&
            <div>
              <div className="details-title">
                {this.state.idResults.name}
              </div>
              <div className="details-overview">
                {this.state.idResults.overview}
              </div>
              
              <div className="details-info">
                <h3>Show Info:</h3>
                <div>
                  {this.state.isMiniseries &&
                  this.state.idResults.type}
                </div>
                {this.state.creator &&
                  <div>Created by: {this.state.creator}</div>
                }
                {this.state.network &&
                  <div>Where to watch: {this.state.network}</div>
                }
                <div>Run time: {this.state.idResults.episode_run_time[0]} minutes</div>
                <div>Episodes: {this.state.idResults.number_of_episodes}</div>
                <div>Seasons: {this.state.idResults.number_of_seasons}</div>
                <div>Originally aired on: {this.state.idResults.first_air_date}</div>
                {this.state.ended && <div>No longer on the air</div>}
                {this.state.idResults.next_episode_to_air && <div>Next Episode: {this.state.idResults.next_episode_to_air.name} @ {this.state.idResults.next_episode_to_air.air_date}</div>}
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ShowDetails