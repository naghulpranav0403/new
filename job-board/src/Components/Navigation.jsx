import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css';
import Socialhire from './Socialhire1.png';
const Navigation = () => {
  return (
    <nav className="navbar">
    <div className="brand-name">
    <img src={Socialhire}  className="logo2" />
    </div>

      <ul>
        <li className="nav-item" >
          <Link to="/home">Home</Link>
        </li>
       
        <li className="nav-item">
        <Link to="/Ourjob">Jobs</Link> 
        </li>
        <li className="nav-item">
          <Link to="/PostJob">Post Job</Link>
        </li> 
        <li className="nav-item">
          <Link to="/SavedJobs">Bookmark</Link>
        </li>
      
        <li className="nav-item">
         <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
