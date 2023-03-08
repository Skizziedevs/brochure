import React from 'react'
import "./ContactForm.css"
function ContactForm() {
  return (
    <div className="form-container">
      <h1>send a message to us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message"rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
