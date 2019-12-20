import React, { Component } from 'react';
import './App.css';

//custom components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ShowDetails from './components/ShowDetails'
import TvCategory from './components/TvCategory';
import Discovery from './components/Discovery'


//react-router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

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

        <Switch>
          <Route
            exact path="/">
            <Redirect to='/home' />
          </Route>
          <Route
            path="/details/:showId"
            render={(props) => (
              <ShowDetails
                key={props.match.params.showId} {...props} />)}>
          </Route>
          <Route
            exact path="/home">
            <Home />
          </Route>
          <Route
            path="/discovery">
            <Discovery />
          </Route>
          <Route
            path="/trending"
            render={props =>
              <TvCategory {...props} category="trending" />}>
          </Route>
          <Route
            path="/tonight"
            render={props =>
              <TvCategory {...props} category="tonight" key={Math.random} />}>
          </Route>
          <Route to="*">
            <Redirect to='/home' />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);