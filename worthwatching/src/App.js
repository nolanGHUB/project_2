import React, { Component } from 'react';
import './App.css';

//custom components
import Show from './components/Show'

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
    const showResults = await SearchTvByTitle("Mandalorian")
    this.setState({
      showResults,
      showSearched: true,
    })
  }

  render() {
    console.log(this.state.showResults)
    return (
      <div className="App">

        <div>
          {this.state.showSearched &&
          <Show
            show={this.state.showResults}
            imgPath={this.state.baseImgPath}
          />
          }
        </div>
      </div>
    );
  }
}

export default App;