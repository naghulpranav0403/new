import './App.css';
import Home from './Components/Home';
import React,{useState} from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apply from './Components/Apply';
import PostJob from './Components/Postjob';
import TestAPI from './Components/TestAPI';
import Ourjob from './Components/Ourjob';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forget from './Components/Forget';
import News from './Components/News';
import Savedjobs from './Components/Savedjobs';
function App() {
  const [users, setUsers] = useState([]);

  const handleSignIn = (email, password) => {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert('User already exists. Please log in.');
      return;
    }

    const newUser = { email, password };
    setUsers([...users, newUser]);
  };

  const handleLogin = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    return user ? true:false;
    
};

  return (
    <><BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />  
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login handleLogin={handleLogin}/>} />
            <Route path="/Signup" element={<Signup handleSignIn={handleSignIn}/>} />
            <Route path="/Ourjob" element={<Ourjob/>} />
             <Route path="/Apply" element={<Apply />} /> 
             <Route path="/Navigation" element={<Navigation />} /> 
             <Route path="/Forget" element={<Forget/>} /> 
             <Route path="/Savedjobs" element={<Savedjobs/>}/>
             <Route path="/Postjob" element={<PostJob />} />      
           </Route>
        </Routes>
      </BrowserRouter> 
    
    </>
  );
}

export default App;