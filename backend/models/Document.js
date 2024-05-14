
// const mongoose = require('mongoose');

// const documentSchema = new mongoose.Schema({
//   fileName: String,
//   filePath: String,
//   uploadDate: { type: Date, default: Date.now }
// });

// const Document = mongoose.model('Document', documentSchema);

// module.exports = Document;
const mongoose = require('mongoose');
const moment = require('moment');
const IST_OFFSET = 5.5 * 60 * 60 * 1000;

// Define a schema for storing document metadata
const DocumentSchema = new mongoose.Schema({
  filename: String, // Filename of the uploaded document
  url: String,
  uploadTime: { type: Date, default: Date.now },
  username: String, // Username of the uploader
});

// Create a model using the schema
const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;
