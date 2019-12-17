import React from 'react'

//react-router
import { withRouter } from 'react-router-dom'

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
        {/* <Link to="/home/results"> */}
        <input
          type="submit"
          value="Search"
          className="search-button"
        />
        {/* </Link> */}
      </form>
    </div>
  )
}

export default withRouter(HomeSearch) 