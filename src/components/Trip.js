import React from 'react'
import "./trip.css"
import TripData from './TripData'
import Trip1 from"../assets/5.jpg"
import Trip2 from"../assets/8.jpg"
import Trip3 from"../assets/6.jpg"

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trip</h1>
      <p>you can discover unique spots using Google maps.</p>
      <div className="tripcard">
      <TripData 
      image={Trip1}
      heading="Trip in indonesia"
      text= "indonesia, officially the republic of indonesia, is a country in south east asia"
       />
        <TripData 
      image={Trip2}
      heading="Trip in indonesia"
      text= "indonesia, officially the republic of indonesia, is a country in south east asia"
       />
        <TripData 
      image={Trip3}
      heading="Trip in indonesia"
      text= "indonesia, officially the republic of indonesia, is a country in south east asia"
       />
      </div>
    </div>
  )
}

export default Trip