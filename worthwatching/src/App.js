import React, { Component } from 'react';
import './App.css';

//custom components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ShowDetails from './components/ShowDetails'

//react-router
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        
        <Switch>
          <Route
            path="/details/:showId"
            render={(props) => 
              <div>
                <Header />
                <ShowDetails {...props} />
                <Footer />
              </div> 
            } 
          />
          <Route
            path="/" >
              <Header />
              <Home />
              <Footer />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;