import React, { useState } from 'react';
import Dashboard from './Dashboard';
import './Login.css'
import './Loginform.css'

const LoginForm = () => {
  // State variables to store the username, password, and logged-in status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Initially not logged in
  
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your authentication logic
    // For simplicity, let's just check username and password
    if (username === 'vstraders' && password === 'vstraders') {
      // Set loggedIn to true if credentials are correct
      setLoggedIn(true);
    } else {
      console.log('Wrong credentials');
      alert('Wrong credentials')
      setUsername('');
      setPassword('');
    }
  }
  
  return (
    <div className="main">
    <div className="signin">
    <div className='content'>

     
      {loggedIn ? ( // Conditionally render Dashboard if logged in
   
       <Dashboard />
      ) : (
        <form className='sform' onSubmit={handleSubmit}>
           <h2 className='headlogin'>Login</h2>
          <div>
            <label className='user' htmlFor="username">Username:</label> <br />
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              className='inp2'
            />
          </div>
          <div>
            <label className='pass' htmlFor="password">Password:</label> <br />
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required  
              className='inp1'
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div></div></div>
  );
}

export default LoginForm;
