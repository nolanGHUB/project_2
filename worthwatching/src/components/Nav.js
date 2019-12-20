import React from 'react'

//react-router
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" activeClassName="selected">
        Home
      </Link>
      <Link to="/trending" activeClassName="selected">
        Trending
      </Link>
      <Link to="/tonight" activeClassName="selected">
        Airing Today
      </Link>
      <Link to="/discovery" activeClassName="selected">
        Discovery
      </Link>
    </nav>
  )
}

export default Nav