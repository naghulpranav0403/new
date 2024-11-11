import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Socialhire from './Socialhire1.png';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedPassword = localStorage.getItem('userPassword') || '';
    setEmail(storedEmail);
    setPassword(storedPassword);
  },[]);

  useEffect(() => {
    localStorage.setItem('userEmail', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('userPassword', password);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    localStorage.setItem("Loggedin",true)
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!password.trim() || password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('https://server-jz3w.onrender.com/api/login', { email, password });
        alert('Login Successful!'); 
        handleLogin(response.data); 
        navigate('/Ourjob')
      } catch (error) {
        if (error.response) {
          const message = error.response.data.message;
          if (message === 'Invalid credentials') {
            alert('Wrong password. Please try again.');
          } else if (message === 'User not found') {
            alert('User not registered. Please register first.'); 
          } 
        } else {
          alert('Login failed. Please try again.'); 
        }
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
    <div className="nav-22">
    <Navigation/>
      </div>

      <div className="login1">
        <form onSubmit={handleSubmit} className="login2">
        
          <img src={Socialhire} alt="Logo" className="loginlogo" />

            <h2>Login</h2>
            <div className="login3">
            <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="login3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="forgotpassword1">
              <label >
               <Link to="/Forget">Forgot Password?</Link>
              </label>
            </div>
            <br />
            <div>
              <button  type="submit" className="gro2">Login</button>
            </div>
            
            <div className="login4">
              <p>
                Don't have an account? <Link to="/Signup">SignUp</Link>
              </p>
            </div>
         
        </form>
      </div>
   
    </>
  );
};

export default Login;