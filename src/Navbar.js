import React from 'react'
import { useState } from 'react';

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
        <div className="nav-container">
        <a href='#'>Home</a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
             <a href='#about'>About</a>
            </li>
            <li className="nav-item">
            <a href='#projects'>Projects</a>
            </li>
            <li className="nav-item">
            <a href='#education'>Education</a>
            </li>
            <li className="nav-item">
            <a href='#services'>Services</a>
            </li>
            <li className="nav-item">
            <a href='#contact'>Contact</a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    )
}



// export default function Navbar() {
//   return (
//         <div classNameName="navbar">
//              <ul>
//                  <li>
//                      <a href="#home">Home</a>
//                  </li>
//                  <li>
//                      <a href="#about">About</a>
//                  </li>
//                  <li>
//                      <a href="#">Projects</a>
//                  </li>
//                  <li>
//                      <a href="#education">Education</a>
//                  </li>
//                  <li>
//                     <a herf="#">Serives</a>
//                  </li>
//                  <li>
//                      <a href="#">Contact</a>
//                  </li>
//              </ul>
//         </div>
//   )
// }

