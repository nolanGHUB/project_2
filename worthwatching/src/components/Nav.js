import React from 'react'

//react-router
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/home" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/top" activeClassName="selected">
        Top Shows
      </NavLink>
      <NavLink to="/trending" activeClassName="selected">
        Trending
      </NavLink>
      <NavLink to="/tonight" activeClassName="selected">
        Airing Today
      </NavLink>
      <NavLink to="/discovery" activeClassName="selected">
        Discovery
      </NavLink>
    </nav>
  )
}

export default Nav