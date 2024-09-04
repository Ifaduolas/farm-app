import React, { useState } from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom'




function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(click);
  
  return(
    <>
    
    <div className="navbar">
        <div className="nav-container">

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                
                <li className="nav-item">
                    <Link to="/register" className="nav-links" onClick={handleClick}>Register</Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )  
}

export default Navbar;