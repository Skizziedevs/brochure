import React from 'react'
import "./destination.css"
import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3.jpg"
import mountain4 from "../assets/4.jpg"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className="destination">
       <h1>Popular Destination</h1>
       <p>Tours give you the opportunity to see a lot, within a time frame</p>
    <DestinationData 
    text="one of the most iconic views in Luzon, mt. Taal boasts a volcano inside a lake inside an island. if you fancy a closer the hike up the crater is a mere 45 minuites and is easy enough for beginners. guides will assist you most of the way and you will see the peculiar environment found on a volcano including volcanic rocks and storm vents."
    heading="Taal Volcano , Batangas"
    img1={mountain1}
    img2={mountain2}
    className="first-des"
    />
    
    <DestinationData 
    text="one of the most iconic views in Luzon, mt. Taal boasts a volcano inside a lake inside an island. if you fancy a closer the hike up the crater is a mere 45 minuites and is easy enough for beginners. guides will assist you most of the way and you will see the peculiar environment found on a volcano including volcanic rocks and storm vents."
    heading="Taal Volcano , Batangas"
    img1={mountain3}
    img2={mountain4}
    className="first-des-reverse"
    />
    
    </div>
  )
}

export default Destination