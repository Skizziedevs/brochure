import React from 'react'
import Hero from '../components/Hero'
import pic1 from "../assets/1.jpg";
import Destination from '../components/Destination';
import Trip from '../components/Trip';


function Home() {
  return (
    <div>
     <Hero 
     cName="hero"
     heroimg={pic1}
     title="Your Journey Your Story"
     btnText="Travle plans"
     url="/"
     btnClass="show"
     />
     <Destination />
     <Trip /> 
    </div>
  )
}

export default Home
