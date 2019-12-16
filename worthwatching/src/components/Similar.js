import React from 'react'

//custom components
import ShowList from './ShowList'

const Similar = (props) => {
  const topSixResults = props.similar.slice(0, 6);
  return (
    <div className="similar">
      <div><h3>Similar shows:</h3></div>
      <ShowList
        shows={topSixResults}
        imgPath={props.imgPath}
        imgSize="200"
      />
    </div>
  )
}

export default Similar