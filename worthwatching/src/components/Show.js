import React from 'react'

const Show = (props) => {

  return (
    <div className="show">
      <div className="show-img">
        <img src={`${props.imgPath}200${props.show[0].poster_path}`} alt="tvPoster" />
      </div>
      <div className="show-title">
        {props.show[0].name}
      </div>
    </div>
  )
}

export default Show