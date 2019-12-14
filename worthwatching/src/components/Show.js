import React from 'react'

const Show = (props) => {
//for img src add 200, 300, 400, 500..etc to change the size of the poster img.
  return (
    <div className="show-wrapper">
      <div className="show">
        <div className="show-img">
          <img src={`${props.imgPath}200${props.show[0].poster_path}`} alt="tvPoster" />
        </div>
        <div className="show-title">
          {props.show[0].name}
        </div>
      </div>
    </div>
  )
}

export default Show