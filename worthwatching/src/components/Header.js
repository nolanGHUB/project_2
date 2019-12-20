import React, { Component } from 'react'

//custom components
import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'

import { Link } from 'react-router-dom'


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDesktop: false
    }
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 550 });
  }

  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <div className="logo-worth">
              WORTH
          </div>
            <div className="logo-watching">
              WATCHING
          </div>
          </div>
        </Link>
        <div className="nav-wrapper">

          {this.state.isDesktop ? (
            <Nav />
          ) : (
              <HamburgerMenu />
            )}
        </div>
      </div >
    )
  }
}

export default Header