import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import Socialhire from './Socialhire1.png';
import Navigation from './Navigation';

const Signup = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim() || formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      try {
        await axios.post('https://server-jz3w.onrender.com/api/register',formData);
        alert(`Signup Successful!\nEmail: ${formData.email}`);       
        navigate('/Login'); 
      } catch (error) {
        if (error.response && error.response.data) {
          const errorMessage = error.response.data.message;

          if (errorMessage === 'Email already exists') {
            alert('Email already exists');
          } else if (errorMessage === 'Username already exists') {
            alert('Username already exists');
          } else {
            alert('An error occurred, please try again.');
          }
        }
      }
    }

    setErrors(errors);
  };

  return (
    <>
    <div className="nav-22">
    <Navigation/>
      </div>

      
      <div className="signup1">
        <form onSubmit={handleSubmit} className="signup2">
        <img src={Socialhire}  className="signuplogo" />
          <div className="signup-form">
            <h2>Sign up</h2>
            <div className="group1">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>
            <div className="group1">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="group1">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="group1">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            
            <div>
              <button  className='group2' type="submit">Sign up</button>
            </div>
            
            <div className="group3">
              <p>
                Already have an account? <Link to="/Login">Log in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;