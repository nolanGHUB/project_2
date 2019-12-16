import React from 'react'

//custom components
import Nav from './Nav'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-worth">
          WORTH
        </div>
        <div className="logo-watching">
          WATCHING
        </div>
      </div>
      <div className="nav-wrapper">
        <Nav />
      </div>
    </div>
  )
}

export default Header