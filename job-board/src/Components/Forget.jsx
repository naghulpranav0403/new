import React, { useState } from 'react';
import './Forget.css';
import Socialhire from './Socialhire1.png';

const Forget = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setMessage('If an account with this email exists, a password reset link has been sent.');
    };

    return (
        <div className="forgot1">
            <form onSubmit={handleSubmit} className="forgot2">
            <img src={Socialhire} alt="Logo" className="forgetlogo" />
                <h2>Forgot Password</h2>
                <div className="forget3">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>  
                <button className="forget4" type="submit">Send Reset Link</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default Forget;