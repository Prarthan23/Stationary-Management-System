// userController.js

const User = require('../models/User');

const register = async (req, res) => {
  const { username, phoneNumber, password } = req.body;

  try {
    // Check if a user with the same username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user document
    const newUser = new User({
      username,
      phoneNumber,
      password,
    });

    // Save the new user document to the database
    await newUser.save();

    // Redirect the user to the landing content page
    res.redirect('/landing');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const UserController = {
  // Get user profile
  getUserProfile: (req, res) => {
    // Here you can implement logic to fetch user profile data from the database
    // For demonstration purposes, we'll send back a mock user profile
    const userProfile = {
      username: 'example_user',
      email: 'user@example.com',
      // Add more profile data as needed
    };
    res.status(200).json(userProfile);
  },

  // Other controller functions...
};

module.exports = UserController;
module.exports = { register };
