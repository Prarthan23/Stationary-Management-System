// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
// import LandingPage from './LandingPage';
// import Registration from './Registration';
// import Login from './Login';
// import Footer from './footer';
// import LandingContent from './LandingContent';

// // const express = require('express');
// // const app = express();
// // const authRoutes = require('./routes/authRoutes');
// // const userRoutes = require('./routes/userRoutes');
// // app.use(express.json());
// // app.use('/api/auth', authRoutes);
// // app.use('/api/user', userRoutes);

// // module.exports = app;
// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         {/* <Navbar /> */}
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/landingcontent" element={< LandingContent/>} />
//           {/* Add more routes as needed */}
//         </Routes>
//       {/* <Footer /> */}
//       </div>
//     </Router>
    
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Registration from './Registration';
import Login from './Login';
import LandingContent from './LandingContent';
import UserDashboard from './UserDashboard';
import Profile from './Profile';
import AboutUs from './AboutUs';

const App = () => {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/landingcontent" element={<LandingContent/>} />
          <Route path="/userdashboard" element={<UserDashboard/>} />
          <Route path="/userprofile" element={<Profile/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
// const [token, setToken] = useState(localStorage.getItem('token'));

  // const handleLogin = (newToken) => {
  //   setToken(newToken);
  //   localStorage.setItem('token', newToken);
  // };

  // const handleLogout = () => {
  //   setToken(null);
  //   localStorage.removeItem('token');
  // };