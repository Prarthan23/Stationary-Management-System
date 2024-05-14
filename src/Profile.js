import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css'; // Import the CSS file

function Profile() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Extract username from the URL query string
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');

    // Fetch user profile based on the extracted username
    if (username) {
      fetchUserProfile(username);
    }
  }, [location]);

  const fetchUserProfile = async (username) => {
    try {
      // Fetch user profile based on the provided username
      const response = await fetch(`http://localhost:3001/userprofile/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
      const data = await response.json();
      setUser(data.user); // Set user details in state
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <div className="profile-container">
      {user && (
        <div className="profile-details">
           <h1 className='p-title'>Profile</h1>
          <p >Username: <span className='u-name'>{user.username}</span></p>
          <p>Password: {user.password}</p>
          <p>Contact: {user.phoneNumber}</p>
          <p>Role: {user.role}</p>
          <p>ID: {user._id}</p>
          {/* Add other user details here */}
        </div>
      )}
    </div>
  );
}

export default Profile;
