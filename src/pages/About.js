
import React from 'react'
import AboutText from '../components/AboutText'
import Hero from "../components/Hero"
import AboutImg from "../assets/night.jpg"

const About = () => {
  return (
    <div>
      <Hero 
     cName="hero-mid"
     heroimg={AboutImg}
     title="About"
     btnClass="hide"
     />
      <AboutText />
    </div>
  )
}

export default About
