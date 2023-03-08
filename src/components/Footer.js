import React from 'react'
import "./footer.css"


function Footer() {
  return (
    <div className="footer">
        <div className="top">
        <div>
            <h1>skizzie</h1>
            <p>choose your favourite location</p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>
        </div>
      
      <div className="bottom">
        <div>
        <h4>Projects</h4>
        <a href="/">changelog</a>
        <a href="/">status</a>
        <a href="/">Lisence</a>
        <a href="/">All versions</a>
        </div>
        <div>
        <h4>Community</h4>
        <a href="/">Github</a>
        <a href="/">Issues</a>
        <a href="/">Projects</a>
        <a href="/">Twitter</a>
        </div>
        <div>
        <h4>Help</h4>
        <a href="/">support</a>
        <a href="/">Troubleshooting</a>
        <a href="/">Contact-us</a>
        </div>
        <div>
        <h4>Help</h4>
        <a href="/">Terms of Services</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Lisence</a>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
