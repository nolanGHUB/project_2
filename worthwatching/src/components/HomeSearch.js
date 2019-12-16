import React from 'react'

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
        <input
          type="submit"
          value="Search"
          className="search-button"
        />
      </form>
    </div>
  )
}

export default HomeSearch