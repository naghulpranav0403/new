import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import Socialhire from './Socialhire1.png';
import { FaEnvelope, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const Home = () => {
  return (
    <>
       <div className='home1'>

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
        <main className="main-content">
        <div className="header-container">
          <section id="browse-jobs" className="browse-container">
         <Link to='/Ourjob'>   <button className="browse-button">Browse Jobs</button> </Link>
          </section>
          <section className="header-content">
            <h1>Welcome to Social-Hire</h1>
            <h2> Si vis Pacem Para Bellum</h2>
            <p>Your gateway to career opportunities</p>
          </section>
        </div>
        <hr className="separator" />
        <div>
          <section id="about" className="about-container">
            <h2>About Us</h2>
            <p>The website "Social-Hire" is a dedicated platform designed to connect young students with job opportunities 
              tailored to their skills and availability. It features a user-friendly interface where employers can post job 
              listings, and students can easily search for part-time, internship, and entry-level positions. With a focus on 
              bridging the gap between education and employment, StudentJobHub offers resources for resume building, interview
              preparation, and career advice, ensuring students are well-equipped to enter the job market confidently.</p>
          </section>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Social-Hire. All rights reserved.</p>
        <div className="social-icons">
          <a href="mailto:socialhire02@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </footer>     
       </div>
    </>
  )
}

export default Home
