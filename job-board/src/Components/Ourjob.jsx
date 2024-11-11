import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import'./jobs.css'    
import axios from 'axios';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
const Ourjob = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');
  const [jobsData,setJobsData]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [experience, setExperience] = useState(''); 
  const [jobType,setJobType]= useState('');
  const [postJobs, setPostJobs] = useState([]);
  
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        console.log('Fetching data from https://retoolapi.dev/1ocjlp/data');
        const response = await axios.get('https://retoolapi.dev/1ocjlp/data');
        console.log('API response data:', response.data);
        setJobsData(response.data);
      
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchPackages();
  }, []);
 
  useEffect(() => {
    const fetchPostJobs = async () => {
      try {
        const response1 = await axios.get('https://server-jz3w.onrender.com/post-jobs');
        console.log('Fetched jobs:', response1.data);
        setPostJobs(response1.data);
      } catch (error) {
        console.error('Failed to fetch saved jobs:', error);
      }
    };
  
    fetchPostJobs();
  }, []); 
 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };
  const handleJobTypeChange = (e) => {
   setJobType(e.target.value);
  };
  const handleSave = async (job) => {
    if (!isAuthenticated) {
      navigate('/Login'); 
    } else {
     
    }
    try {
      await axios.post('https://server-jz3w.onrender.com/save-job', job);
   
    } catch (error) {
      console.error('Failed to save job:', error);
    }
  };
  const allJobs = [...jobsData, ...postJobs];
  const filteredJobs = allJobs.filter(job => {
    return (
     (job.POSITION &&
      job.POSITION.toLowerCase().includes(searchTerm))||
      (job.COMPANY&& job.COMPANY.toLowerCase().includes(searchTerm))  &&  
      (category === '' || job.ROLE === category) &&
      (experience === '' || job.EXPERIENCE === experience)&&
      (jobType === '' || job.JOBTYPE === jobType)
    );
  });
  
  return (
    <>
    <div className="nav-22">
    <Navigation/>
      </div>
      
    <div className="job-page">
      <h1 className='title'>Jobs</h1>
      <div className="filters">
        <div className='fil1'>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearch}
        />
        </div>
        <div className='vat'>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option  value="Frontend" className= "vat-na">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Devops">Devops</option>  
          <option value="Embedded System">Embedded System</option>  
          <option value=" CA">CA</option>  
          <option value="Sales">Sales</option>  
          <option value="Accounting">Accounting</option>  
          <option value="Developer">Developer</option>  
          <option value="Engineer">Engineer</option>  
          <option value="Design">Designer</option>  
          <option value="Software">Software</option>  
          <option value="E-Commerce">E-Commerce</option>  
          
        </select>
        </div>
        <div>        
        <select value={jobType} onChange={handleJobTypeChange}>
        <option value="">All Jobtype</option>
          <option  value="Part-time" className= "vat-na">Part-time</option>
          <option value="Full-time">Full time</option>
          <option value="Work from home">Work from home</option>    
        </select>
          </div>
<div className='vat'>
        <select value={experience} onChange={handleExperienceChange}>
          <option value="">All Experience Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>       
        </select>
        </div>
      </div>
      <div className="job-listings">
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-item">
                <div className="job-header">
                <img src={job.LOGO}  className="logo" />
                <div className="company-info">
                  <h3>{job.COMPANY}</h3>
                  <h2>{job.POSITION}</h2>
                </div>
              </div>            
                <div className='ro'> 
            <p> {job.LOCATION}</p>
            <p> {job.EXPERIENCE}</p>
                </div>
            <div className="buu">

        <Link to="/Apply">
      
            <button className="apply-button"  onClick={() => handleApply(job)}>Apply Now</button>
        </Link>
        <Link to="/Savedjobs">
                  <button
                    className="apply-button"
                    onClick={() => handleSave(job)}
                  >
                  Bookmark
                  </button>
                </Link>
              </div>
              
          </div>
        ))}
      </div>
     
    </div>
    </>
  );
};

export default Ourjob;