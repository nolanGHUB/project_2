import React from 'react'

const ShowDetails = (props) => {
  return (
    <div className="show-details">
      <div>{props.match.params.showId}</div>
    </div>
  )
}

export default ShowDetails