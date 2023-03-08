import "./Navbar.css";
import { Link, useLocation} from "react-router-dom";
import { Menuitems } from "./Menu-items"

import React, { useState, useEffect } from 'react'

function Navbar() {

  const [toggle, setToggle] = useState(false)
  
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [location]);


  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">skizzie</h1>

        <div className="menu-icons"  onClick={() => setToggle(!toggle)}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars" }></i>
         
        </div>

        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, i) => {
            return(
              <li key={i}>
                <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
            </li>
            )
          })}
            <button>Sign up</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
