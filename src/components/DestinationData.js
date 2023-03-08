import React from 'react'
import "./destinationData.css"
import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3.jpg"
import mountain4 from "../assets/4.jpg"

const DestinationData = (props) => {
  return (
    <div className="des">
      <div className={props.className}>
<div className="des-text">
  <h2>{props.heading}</h2>
  <p>{props.text}</p>
</div>
<div className="image">
  <img src={props.img1} />
  <img src={props.img2} />
</div>
        </div>
    
    </div>
  )
}

export default DestinationData
