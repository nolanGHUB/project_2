import React from 'react'

const Trailer = (props) => {
  return (
    <div className="trailer">
      <iframe
        title={props.videoKey}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.videoKey}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Trailer