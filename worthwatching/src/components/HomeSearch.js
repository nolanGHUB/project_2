import React from 'react'

const HomeSearch = (props) => {
  return (
    <div>
      <form
        onSubmit={props.searchSubmit}
        className="post-form"  
      >
        <input
          type="text"
          name="title"
          value={props.title}
          placeholder="TV Show Title"
          onChange={props.searchTextChange}
        />
        <input
          type="submit"
          value="Search"
        />
      </form>
    </div>
  )
}

export default HomeSearch