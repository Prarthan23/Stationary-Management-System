const mongoose = require('mongoose');

// Define the schema for material requests
const materialRequestSchema = new mongoose.Schema({
  material: String,
  studentName: String,
  college: String,
  branch: String,
  phoneNumber: String
});

// Create the MaterialRequest model using the schema
const MaterialRequest = mongoose.model('MaterialRequest', materialRequestSchema);

// Export the MaterialRequest model
module.exports = MaterialRequest;