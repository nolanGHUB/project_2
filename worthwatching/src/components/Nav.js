import React from 'react'

//react-router
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        Home
      </Link>
      <Link to="/trending">
        Trending
      </Link>
      <Link to="/tonight">
        Airing Today
      </Link>
      <Link to="/discovery">
        Discovery
      </Link>
    </nav>
  )
}

export default Nav