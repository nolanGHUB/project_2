import React, { Component } from 'react'

//custom components
import HomeSearch from './HomeSearch'

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
    }
  }

  tvSearch = async () => {
    const showResults = await SearchTvByTitle(this.state.title)
    this.setState({
      showResults,
      showSearched: true,
    })
  }

  searchSubmit = (e) => {
    e.preventDefault();

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
      <div>
        <HomeSearch
          searchTextChange={this.searchTextChange}
          searchSubmit={this.searchSubmit}
          title={this.state.title}
        />
      </div>
    )
  }
}

export default Home