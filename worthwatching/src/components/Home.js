import React, { Component } from 'react'

//custom components
import HomeSearch from './HomeSearch'
import ShowList from './ShowList'

//api calls
import { SearchTvByTitle } from '../services/api-helper'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseImgPath: "https://image.tmdb.org/t/p/w",
      title: "",
      searchResults: [],
      showSearched: false,
      imgSize: "200"
    }
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

  render() {
    return (
      <div className="home">
        <HomeSearch
          searchTextChange={this.searchTextChange}
          searchSubmit={this.searchSubmit}
          title={this.state.title}
        />
        {this.state.showSearched &&
        <ShowList
          shows={this.state.searchResults}
          imgPath={this.state.baseImgPath}
          imgSize={this.state.imgSize}
        />
        }
      </div>
    )
  }
}

export default Home