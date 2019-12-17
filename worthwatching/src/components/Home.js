import React, { Component } from 'react'

//react-router
import { withRouter } from 'react-router-dom'

//custom components
import HomeSearch from './HomeSearch'
import ShowList from './ShowList'
import Carousel from './Carousel'

//api calls
import { SearchTvByTitle, SearchTrendingTv } from '../services/api-helper'


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseImgPath: "https://image.tmdb.org/t/p/w",
      title: "",
      searchResults: [],
      showSearched: false,
      imgSize: "200",
      trendingTv: [],
      hasTrendingLoaded: false,
    }
  }

  componentDidMount = async () => {
    await this.getTrending();
  }

  tvSearch = async () => {
    const searchResults = await SearchTvByTitle(this.state.title);
    const filteredResults = searchResults.filter(show =>
      show.poster_path && show.vote_count > 0 && show.overview
    )

    this.setState({
      searchResults: filteredResults,
      showSearched: true,
    })
  }

  getTrending = async () => {
    const trendingTv = await SearchTrendingTv();

    this.setState({
      trendingTv,
      hasTrendingLoaded: true,
    })
  }

  searchSubmit = async (e) => {
    e.preventDefault();
    await this.tvSearch();
    this.setState({
      title: ""
    })
  }

  searchTextChange = (e) => {
    const title = e.target.value;
    this.setState({
      title
    })
  }

  showCarousel() {
    return (this.state.hasTrendingLoaded &&
      <Carousel
        shows={this.state.trendingTv}
        imgPath={this.state.baseImgPath}
        imgSize={this.state.imgSize}
      />)
  }

  render() {
    return (
      <div className="home">
        <HomeSearch
          searchTextChange={this.searchTextChange}
          searchSubmit={this.searchSubmit}
          title={this.state.title}
        />
        {this.state.showSearched ?
          <ShowList
            shows={this.state.searchResults}
            imgPath={this.state.baseImgPath}
            imgSize={this.state.imgSize}
          />
          :
          this.showCarousel()
        }
      </div>
    )
  }
}

export default withRouter(Home)