import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

//react-router
import { NavLink } from 'react-router-dom';

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeMenu() {
    document.querySelector('.ham-nav').classList.toggle('open');
  }

  render() {
    return (
      <div className="hamburger">
        <i className="fa fa-bars ham-butt" onClick={() => this.toggleMenu()}></i>
        <nav className={"ham-nav " + (this.state.isOpen ? 'open' : null)}>
          <NavLink to="/" activeClassName="selected" onClick={this.closeMenu}>
            Home
            </NavLink>
          <NavLink to="/trending" activeClassName="selected" onClick={this.closeMenu}>
            Trending
             </NavLink>
          <NavLink to="/tonight" activeClassName="selected" onClick={this.closeMenu}>
            Airing Today
            </NavLink>
          <NavLink to="/discovery" activeClassName="selected" onClick={this.closeMenu}>
            Discovery
            </NavLink>
        </nav>
      </div>
    );
  }
}

export default HamburgerMenu