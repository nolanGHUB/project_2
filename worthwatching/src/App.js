import React, { Component } from 'react';
import './App.css';

//custom components
import Show from './components/Show'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

//api calls
import { SearchTvByTitle } from './services/api-helper'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseImgPath: "https://image.tmdb.org/t/p/w",
      title: "mandalorian",
      showResults: [],
      showListResults: [],
      showSearched: false,
    }
  }

  componentDidMount = async () => {
    const showResults = await SearchTvByTitle(this.state.title)
    this.setState({
      showResults,
      showSearched: true,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <div>
          {this.state.showSearched &&
          <Show
            show={this.state.showResults}
            imgPath={this.state.baseImgPath}
          />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;