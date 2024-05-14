// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Import your User model
// const { authenticateUser } = require('../middleware/authenticationMiddleware');
// const { register } = require('../controllers/userController');
// const UserController = require('../controllers/userController');


// router.get('/profile', authenticateUser, UserController.getUserProfile);
// // Route to handle registration form submissions

// router.post('/register', async (req, res) => {
//   // Extract data from the request body
//   const { username, phoneNumber, password } = req.body;

//   try {
//     // Check if a user with the same username already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     // Create a new user document
//     const newUser = new User({
//       username,
//       phoneNumber,
//       password,
//     });

//     // Save the new user document to the database
//     await newUser.save();

//     // Redirect the user to the landing content page
//     res.redirect('/landing');
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const { authenticateUser } = require('../middleware/authenticationMiddleware');
const { register } = require('../controllers/userController');

router.post('/register', async (req, res) => {
  
  const { username, phoneNumber, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({
      username,
      phoneNumber,
      password,
    });

   
    await newUser.save();


    res.redirect('/landing');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/profile', authenticateUser, (req, res) => {
  
});

module.exports = router;
