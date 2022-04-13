import React from 'react'
import pic from './new.jpg'
import {Link } from  "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark col-md-11 m-auto">
     
   
   <img src={pic} className="img1 ml-6 mr-2 "></img>
    <button className="navbar-toggler an  "  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon an" ></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link an" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link an" to="/About">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link an" to="/Skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link an" to="/Work">Work</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link an" to="/Contact">Contact</Link>
        </li>
      </ul>
      
    </div>
 
  </nav>
  <hr className='hrr' /></div>
  )
}

export default Navbar