import React, { Component } from 'react'

//custom components
import ShowList from './ShowList'

//api calls
import { SearchTrendingTv, SearchTvAiringToday } from '../services/api-helper'

//react-router
import { withRouter } from 'react-router-dom'

class TvCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tvResults: [],
      baseImgPath: "https://image.tmdb.org/t/p/w",
      imgSize: "200",
      hasLoaded: false,
      title: "",
    }
  }

  componentDidMount = async () => {
    switch (this.props.category) {
      case "tonight":
        await this.getAiringTonight();
        break;
      case "trending":
        await this.getTrending();
        break;
      case "top":
        break;
      default:
        console.log("Something went wrong, unexpected switch result in TvCategory component didMount no api called.");
    }
  }

  getAiringTonight = async () => {
    const tvResults = await SearchTvAiringToday()
    this.setState({
      tvResults,
      hasLoaded: true,
      title: "AIRING TODAY"
    })
  }

  getTrending = async () => {
    const tvResults = await SearchTrendingTv()
    this.setState({
      tvResults,
      hasLoaded: true,
      title: "TRENDING THIS WEEK"
    })
  }

  render() {
    return (
      <div className="tv-category-wrapper">
        <div className="similar-title">{this.state.title}</div>
        {this.state.hasLoaded &&
          <ShowList
            shows={this.state.tvResults}
            imgPath={this.state.baseImgPath}
            imgSize={this.state.imgSize}
          />
        }
      </div>
    )
  }
}

export default withRouter(TvCategory)