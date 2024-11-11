import React, { useState } from 'react';
import './Postjob.css';
import Navigation from './Navigation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Socialhire from './Socialhire1.png';
const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    LOGO: '',
    POSITION: '',
    COMPANY: '',
    LOCATION: '',
    JOBTYPE: '',
    ROLE: '',
    EXPERIENCE: '',
    SALARY: ''
  });
  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  if (!isFormValid()) {
    setError('Please fill out all fields before submitting.');
  }
  else{
  }
  try {
    await axios.post('hhttps://server-jz3w.onrender.com/post-jobs', formData);
    setFormData({
      LOGO: '',
      POSITION: '',
      COMPANY: '',
      LOCATION: '',
      JOBTYPE: '',
      ROLE: '',
      EXPERIENCE: '',
      SALARY: ''
  });
  navigate('/Ourjob');

  } catch (error) {
    console.error('Failed to post job:', error);
  }
};
return (
    <>
    
    <div className="nav-22">
    <Navigation/>
      </div>
    <div className='post4'>

    <form className="post1" onSubmit={handleSubmit} >
 
        <img src={Socialhire}  className="logo4" />
       
      <h2>Post a Job</h2>
      <div className="post2">
      <label htmlFor="LOGO">Logo</label>
            <input
              type="url "
              id="LOGO"
              name="LOGO"
              value={formData.LOGO}
              onChange={handleChange}
              placeholder="Enter logo URL"
              required
            />
            </div>
      <div className="post2">
        <label htmlFor="POSITION">Position</label>
        <input
          type="text"
          id="POSITION"
          name="POSITION"
          value={formData.POSITION}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="COMPANY">Company Name</label>
        <input
          type="text"
          id="COMPANY"
          name="COMPANY"
          value={formData.COMPANY}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="LOCATION">Location</label>
        <input
          type="text"
          id="LOCATION"
          name="LOCATION"
          value={formData.LOCATION}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="ROLE">Role</label>
        <input
          type="text"
          id="ROLE"
          name="ROLE"
          value={formData.ROLE}
          onChange={handleChange}
          required
          />
      </div>
      <div className="post2">
        <label htmlFor="JOBTYPE">JobType</label>
        <select
          id="JOBTYPE"
          name="JOBTYPE"
          value={formData.JOBTYPE}
          onChange={handleChange}
          required
          >
          <option value="">Select Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Work from home">Work from home</option>
          
        </select>
      </div>
      {/* <div className="post2">
        <label htmlFor="description">Job Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          />
      </div> */}
      <div className="post2">
        <label htmlFor="EXPERIENCE">EXPERIENCE</label>
        <select
          id="EXPERIENCE"
          name="EXPERIENCE"
          value={formData.EXPERIENCE}
          onChange={handleChange}
          required
          >
            <option value="">Select EXPERIENCE</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
          </select>
      </div>
      <div className="post2">
        <label htmlFor="SALARY">Salary</label>
        <input
          type="number"
          id="SALARY"
          name="SALARY"
          value={formData.SALARY}
          onChange={handleChange}
          required
          />
      </div>
       <button  className="post3" type='submit'>Post Job</button>

 

    </form>
          </div>
          </>
  );
};

export default PostJob;