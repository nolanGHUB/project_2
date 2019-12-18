import React from 'react'

//custom components
import ShowList from './ShowList'

const Similar = (props) => {
  const workingImagesArray = props.similar.filter(show =>
    show.poster_path
  );
  const topSixResults = workingImagesArray.slice(0, 6);
  return (
    <div className="similar">
      <div className="similar-title">SIMILAR SHOWS:</div>
      <ShowList
        shows={topSixResults}
        imgPath={props.imgPath}
        imgSize="200"
      />
    </div>
  )
}

export default Similar