/* eslint-disable no-empty-pattern */
// // Registration.js
// import React from 'react';
// import './Registration.css'; // Import the CSS file

// const Registration = () => {
//   // Your registration component logic

//   return (
//     <div className="registration-container">
//       <h2>Registration</h2>
//       <form className="registration-form">
//         {/* Your form fields go here */}
//         <label>Username:</label>
//         <input type="text" />

//         <label>Email:</label>
//         <input type="email" />

//         <label>Password:</label>
//         <input type="password" />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;
// Registration.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
// import './Registration.css';
// import { Link } from 'react-router-dom';

// const Registration = ({ onStop}) => {
//   const handleBack = () => {
//     onStop = () => {
//     <Link to= "/home"></Link>
//     }
//     // console.log("button is clicked")
//     // onBack(); // Call the onBack function provided as a prop
//   };

//   return (
//     <div className="registration-modal">
//       <div className="registration-form-container">
//         <div className="registration-header">
//           <div className="registration-logo" >
//             <FontAwesomeIcon icon={faUser} size='4x' />
//           </div>
//           <div className="Registration-title">SIGN-UP</div>
//         </div>
//         {/* Your registration form content goes here */}
//         <form className="Registration-form">
//           {/* Your form fields go here */}
//           <input className="Registration-input" type="text" placeholder="Username" />
//           <input className="Registration-input" type="text" placeholder="Phone Number" />
//           <input className="Registration-input" type="password" placeholder="Password" />
//           <button className="Registration-button" type="submit">
//             Register
//           </button>
//         </form>
//         <div className="already-user-link">
//           Already a user? <Link to="/login">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

// import React, { useState } from 'react';
// import './Registration.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     phoneNumber: '',
//     password: ''
//   });
//   const handleBack = () => {
//     window.history.back();
//   };
//   const [registrationDone, setRegistrationDone] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to your backend server to store user data
//       const response = await axios.post('http://localhost:5000/api/auth/register', formData);
//       console.log('User registration successful:', response.data);
//       // Optionally, you can redirect the user to another page after successful registration
//       // window.location.href = '/success'; // Redirect to success page
//     } catch (error) {
//       console.error('Error registering user:', error.response?.status);
//       console.error('Error message:', error.response?.data?.message);
//   // Handle any errors that occur during registration
//     }
//   };

//   return (
//     <div className="registration-modal">
//       <div className="registration-form-container">
//       <div className='leftarrow'>
//       <div className="back-button" onClick={handleBack}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </div>
//       </div>
//       <div className="registration-logo" >
//              <FontAwesomeIcon icon={faUser} size='4x' />
//       </div>
//         <div className="Registration-title">
//           SIGN-UP
//         </div>
//         {registrationDone ? ( // Conditionally render the message if registration is done
//           <div className="registration-done-message">Registration Done!</div>
//         ) : (
//         <form className="Registration-form" onSubmit={handleSubmit}>
//           <input
//             className="Registration-input"
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           <input
//             className="Registration-input"
//             type="text"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//           />
//           <input
//             className="Registration-input"
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <button className="Registration-button" type="submit" onClick={handleSubmit}>Register</button>
//           {/* <Link to="/content" className="" >
//             Register
//           </Link> */}
//         </form>
//         )}
//         <div className="already-user-link">
//            Already a user? <Link to="/login"><strong>Login</strong></Link>
//          </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Registration.css';
// import { Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
// import { useHistory } from 'react-router';
// import LandingContent from './LandingContent';



// const Registration = () => {

//   const[username, setusername] = useState()
//   const[phoneNumber, setphoneNumber] = useState()
//   const[password, setpassword] = useState()

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     if(!username || !phoneNumber || !password){
//       alert('please fill in all fields');
//       return;
//     }
//     axios.post('http://localhost:3001/register',{username, phoneNumber, password})
//     .then(result => {
//       console.log(result);
//       setTimeout(() => {
//         window.location.href = '/userdashboard'; // Redirect to landingcontent after 2 seconds
//       }, 2000);
//        setRegistrationDone(true);
//       // window.location.href = './LandingContent.js'; // Optionally, set a state to indicate registration success
//     })
//     .catch(err => console.log(err))
//   }

//   const handleBack = () => {
//         window.history.back();
//       };
//       const [registrationDone, setRegistrationDone] = useState(false);
//   return (
//     <div className="registration-modal">
//       <div className="registration-form-container">
//       <div className='leftarrow'>
//       <div className="back-button" onClick={handleBack}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </div>
//       </div>
//       <div className="registration-logo" >
//              <FontAwesomeIcon icon={faUser} size='4x' />
//       </div>
//         <div className="Registration-title">
//           SIGN-UP
//         </div>
//         {registrationDone ? ( // Conditionally render the message if registration is done
//           <div className="registration-done-message">Registration Done!</div>
//         ) : (
//         <form className="Registration-form" onSubmit={handleSubmit}>
//           <input
//             className="Registration-input"
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={(e) => setusername(e.target.value)}
//           />
//           <input
//             className="Registration-input"
//             type="text"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             onChange={(e) => setphoneNumber(e.target.value)}
//           />
//           <input
//             className="Registration-input"
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={(e) => setpassword(e.target.value)}
//           />
//           <button className="Registration-button" type="submit">Register</button>
//           {/* <Link to="/content" className="" >
//             Register
//           </Link> */}
//         </form>
//         )}
//         <div className="already-user-link">
//            Already a user? <Link to="/login"><strong>Login</strong></Link>
//          </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;
import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !phoneNumber || !password) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/register', { username, phoneNumber, password });
      console.log(response);
      navigate(`/userdashboard?username=${username}`);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="registration-modal">
      <div className="registration-form-container">
        <div className='leftarrow'>
          <div className="back-button" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </div>
        <div className="registration-logo">
          <FontAwesomeIcon icon={faUser} size='4x' />
        </div>
        <div className="Registration-title">
          SIGN-UP
        </div>
        <form className="Registration-form" onSubmit={handleSubmit}>
          <input
            className="Registration-input"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="Registration-input"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="Registration-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Registration-button" type="submit">Register</button>
        </form>
        <div className="already-user-link">
          Already a user? <Link to="/login"><strong>Login</strong></Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
