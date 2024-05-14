const jwt = require('jsonwebtoken');

// Secret key to sign JWT tokens
const secretKey = 'your_secret_key';

// Function to generate JWT token
const generateAuthToken = (username) => {
  // Create a payload with user information
  const payload = {
    username: username,
    // You can include additional information in the payload if needed
  };

  // Sign the payload with the secret key to generate the token
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

  return token;
};

module.exports = generateAuthToken;
