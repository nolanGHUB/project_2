import React, { Component } from 'react';

//custom components
import ShowList from './ShowList'

//api calls
import { SearchTrendingTv } from '../services/api-helper'

class Trending extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trendingTv: [],
      baseImgPath: "https://image.tmdb.org/t/p/w",
      imgSize: "200",
      hasLoaded: false,
    }
  }

  componentDidMount = async () => {
    await this.getTrending();
  }

  getTrending = async () => {
    const trendingTv = await SearchTrendingTv()
    this.setState({
      trendingTv,
      hasLoaded: true
    })
  }

  render() {
    return (
      <div className="trending">
        {this.state.hasLoaded &&
          <ShowList
            shows={this.state.trendingTv}
            imgPath={this.state.baseImgPath}
            imgSize={this.state.imgSize}
          />
        }
      </div>
    )
  }
}

export default Trending