// Login.js
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleUser, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LandingContent from './LandingContent';

const Login = () => {
 const navigate = useNavigate();
 const [username, setusername] = useState('');
 const [password, setpassword] = useState('');
 const [role, setRole] = useState('user');
 const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = (e) =>{
    if(!username || !password){
      alert('please fill in all fields');
      return;
    }
    e.preventDefault();
    // axios.post('http://localhost:3001/login', { username, password, role })
    // .then(result => {
    //   console.log(result);
    //   if(result.data === "Success Admin"){
    //     setLoggedInUser(username);
    //     setTimeout(() => {
    //      navigate('/landingcontent?username=${username}'); // Redirect to landingcontent after 2 seconds
    //     }, 2000);
    //   }else if(result.data === "Password incorrect"){
    //     alert('Password Incorrect!');
    //   }
    //   else if(result.data === "Admin not exist"){
    //     alert('You are not an Admin! try user instead.');
    //   } 
    //   if(result.data === "Success"){
    //     setTimeout(() => {
    //       navigate('/userdashboard'); // Redirect to landingcontent after 2 seconds
    //     }, 2000);
    //   }
    //   else if(result.data === "Password incorrect"){
    //     alert('Password Incorrect!');
    //   }
    //   else if(result.data === "User not exist"){
    //     alert('User not exist!');
    //   }
    // })
    // .catch(err => console.log(err))
  axios.post('http://localhost:3001/login', { username, password, role })
  .then(result => {
    console.log(result);
    if (result.data.success) {
      // Check if the user is an admin or a regular user
      if (result.data.user.role === "admin") {
        setLoggedInUser(username);
        setTimeout(() => {
          navigate(`/landingcontent?username=${username}`); // Redirect to landingcontent after 2 seconds
        }, 2000);
      } else if (result.data.user.role === "user") {
        setTimeout(() => {
          navigate(`/userdashboard?username=${username}`); // Redirect to userdashboard after 2 seconds
        }, 2000);
      }
    } else {
      // Handle unsuccessful login
      alert(result.data.message);
    }
  })
  .catch(err => console.log(err));

  }

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="login-modal">
      <div className="login-form-container">
      <div className='leftarrow'>
      <div className="back-button" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
      </div>
      <div className="login-logo" >
             <FontAwesomeIcon icon={faCircleUser} size='4x' />
      </div>
        <div className="login-title">
          LOGIN
        </div>
      
        <form className="Login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
           <select
            className="login-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button className="login-button" type="submit">Login</button>
          {/* <Link to="/content" className="" >
            Register
          </Link> */}
        </form>
        
        {/* <div className="already-user-link">
           Already a user? <Link to="/login"><strong>Login</strong></Link>
         </div> */}
      </div>
    </div>
  );
};

export default Login;

//   // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5000/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     const data = await response.json();
  //     Login(data.token);
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //   }
  // };
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3001/login', {
  //       username,
  //       password,
  //     });
  //     const { token } = response.data;
  //     localStorage.setItem('token', token); // Store token in local storage
  //     window.location.href = '/landingcontent';  // Redirect to landing content
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     // Handle login failure, e.g., display an error message to the user
  //   }
  // };