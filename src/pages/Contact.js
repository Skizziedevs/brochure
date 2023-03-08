import React from 'react'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import AboutImg from "../assets/2.jpg"

function Contact() {
  return (
    <div>
       <Hero 
     cName="hero-mid"
     heroimg={AboutImg}
     title="Services"
     btnClass="hide"
     />
      <ContactForm />
    </div>
  )
}

export default Contact
