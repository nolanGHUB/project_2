import React, { Component } from 'react';
import './App.css';

//custom components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;