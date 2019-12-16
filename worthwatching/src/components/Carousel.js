import React from 'react'

//custom components
import Show from './Show'

const Carousel = (props) => {
  return (
    <div className="carousel">
      <div className="mover">
        {props.shows.map((show, key) =>
              <div key={key}>
                  <Show 
                    imgPath={props.imgPath}
                    show={show}
                    imgSize={props.imgSize}
                  />
              </div>
            )}
      </div>
    </div>
  )
}

export default Carousel