import React from 'react'

//custom components
import Show from './Show'

const ShowList = (props) => {
  return (
    <div className="show-list-wrapper">
      <div className="show-list">
        {props.shows.map((show, key) =>
          <div className="show-wrapper" key={key}>
            {show.poster_path && show.vote_count > 0 && show.overview &&
            <Show 
              imgPath={props.imgPath}
              show={show}
              imgSize={props.imgSize}
            />
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowList