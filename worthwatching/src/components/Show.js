import React from 'react'

//react-router
import { Link } from 'react-router-dom'

const Show = (props) => {
  //for img src add 200, 300, 400, 500..etc to change the size of the poster img.
  return (
    <div className="show-wrapper">
      <div className="show">
        <Link to={{ pathname: `/details/${props.show.id}` }}>
          {/* {props.show.poster_path && ( */}
          <div className="show-img">
            <img src={`${props.imgPath}${props.imgSize}${props.show.poster_path}`} alt="tvPoster" />
          </div>
          {/* )} */}
        </Link>
        <div className="show-title">
          {props.show.name}
        </div>
      </div>
    </div>
  )
}

export default Show