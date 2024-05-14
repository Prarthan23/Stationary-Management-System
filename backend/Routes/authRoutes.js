const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { login } = require('../controllers/authController');

router.post('/register', async (req, res) => {
  try {
    // Handle user registration logic here
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', login);

// Route to handle user login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
