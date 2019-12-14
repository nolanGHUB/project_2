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
      showResults: [],
      showListResults: [],
      showSearched: false,
      imgSize: "200"
    }
  }

  tvSearch = async () => {
    const showResults = await SearchTvByTitle(this.state.title)
    this.setState({
      showResults,
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
        <div>{this.state.showResults.length}</div>
        <HomeSearch
          searchTextChange={this.searchTextChange}
          searchSubmit={this.searchSubmit}
          title={this.state.title}
        />
          {this.state.showSearched &&
          <ShowList
            shows={this.state.showResults}
            imgPath={this.state.baseImgPath}
            imgSize={this.state.imgSize}
          />
          }
      </div>
    )
  }
}

export default Home