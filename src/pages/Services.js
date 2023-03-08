import React from 'react'
import Trip from '../components/Trip';
import Hero from "../components/Hero"
import AboutImg from "../assets/night.jpg"

const Services = () => {
  return (
    <div>
      <Hero 
     cName="hero-mid"
     heroimg={AboutImg}
     title="Services"
     btnClass="hide"
     />
      <Trip />
    </div>
  )
}

export default Services
