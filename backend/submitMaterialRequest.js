// submitMaterialRequest.js

const express = require('express');
const router = express.Router();
const app = express();

// POST endpoint to handle material request submission
app.post('/submitMaterialRequest', (req, res) => {
  // Extract material request data from the request body
  const { material, studentName, college, branch, phoneNumber } = req.body;

  // Here you can perform any necessary validation or processing of the data,
  // such as saving it to a database or performing additional business logic.

  // For demonstration purposes, we'll simply log the data to the console.
  console.log('Material Request:');
  console.log('Material:', material);
  console.log('Student Name:', studentName);
  console.log('College:', college);
  console.log('Branch:', branch);
  console.log('Phone Number:', phoneNumber);

  // Respond with a success message
  res.status(200).json({ message: 'Material request submitted successfully!' });
});

module.exports = router;
