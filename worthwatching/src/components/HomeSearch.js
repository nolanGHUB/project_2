import React from 'react'

//react-router
import { withRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

const HomeSearch = (props) => {
  return (
    <div className="home-search">
      <form
        onSubmit={props.searchSubmit}
        className="home-search-form"
      >
        <input
          type="text"
          name="title"
          value={props.title}
          placeholder="TV Show Title"
          autoComplete="off"
          onChange={props.searchTextChange}
          className="search-input"
        />
        <div className="search-icon"><i className="fa fa-search"></i></div>

        <input
          type="submit"
          value="Search"
          className="search-button"
        />
      </form>
    </div>
  )
}

export default withRouter(HomeSearch) 