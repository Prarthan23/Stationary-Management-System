import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserDetails, setEditedUserDetails] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  useEffect(() => {
    // Assuming loggedInUser is set elsewhere in your application (e.g., after successful login)
    if (loggedInUser) {
      fetchUserDetails(loggedInUser);
    }
  }, [loggedInUser]);

// Example of storing the username after login

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3001/userdetails', {
        params: { username: loggedInUser }
      });
      setUserDetails(response.data.user);
      setEditedUserDetails(response.data.user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserDetails({ ...editedUserDetails, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put('/userdetails', editedUserDetails);
      setUserDetails(editedUserDetails); // Update userDetails with editedUserDetails
      setEditMode(false);
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };
  return (
    <div className="user-profile">
      {userDetails && (
        <div>
          <h2>User Profile</h2>
          <div>
            <label>Username:</label>
            {editMode ? (
              <input
                type="text"
                name="username"
                value={editedUserDetails.username}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userDetails.username}</span>
            )}
          </div>
          <div>
            <label>Email:</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={editedUserDetails.email}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userDetails.email}</span>
            )}
          </div>
          <div>
            <label>Phone Number:</label>
            {editMode ? (
              <input
                type="text"
                name="phoneNumber"
                value={editedUserDetails.phoneNumber}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userDetails.phoneNumber}</span>
            )}
          </div>
          <div>
            <label>Role:</label>
            <span>{userDetails.role}</span>
          </div>
          {editMode ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
