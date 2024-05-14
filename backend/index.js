// // backend/index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User = require('./models/User');
// const MaterialRequest = require('./MaterialRequest');
// const Document = require('./Document');
// const bodyParser = require('body-parser');
// const app = express();


// app.use(cors());
// app.use(express.json());

// app.post("/login", (req, res) => {
//   const {username, password} = req.body;
//   User.findOne({username : username})
//   .then(users => {
//     if(users){
//       if(users.password === password){
//         res.json("Success")
//       } else{
//         res.json("Password incorrect")
//       }
//     } else {
//       res.json("User not exist")
//     }
//   })
// });

// app.post('/register', (req, res) => {
//     User.create(req.body)
//     .then(Users => res.json(Users))
//     .catch(err => res.json(err))
// });
// mongoose.connect('mongodb://localhost:27017/stationary_db', { useNewUrlParser: true, useUnifiedTopology: true });
// app.use(bodyParser.json());

// app.post('/MaterialRequest', (req, res) => {

//   const { material, studentName, college, branch, phoneNumber } = req.body;
//   const currentDate = new Date();
//   const isoDate = currentDate.toISOString();
//   // Example: Save material request data to a database
//   // Replace this with your actual database logic
//   MaterialRequest.create({
//     material,
//     studentName,
//     college,
//     branch,
//     phoneNumber,
//     date: isoDate
//   })
//   .then(() => {
//     // Send a success response back to the frontend
//     res.status(200).json({ message: 'Material request submitted successfully' });
//   })
//   .catch((error) => {
//     console.error('Error submitting material request:', error);
//     // Send an error response back to the frontend
//     res.status(500).json({ error: 'Internal Server Error' });
//   });
// });

// app.get('/MaterialRequest', async (req, res) => {
//   try {
//     const requests = await MaterialRequest.find();
//     res.json(requests);
//   } catch (error) {
//     res.status(500).send('Error retrieving material requests');
//   }
// });

// app.delete('/MaterialRequest/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     // Find the material request by ID and delete it
//     const deletedRequest = await MaterialRequest.findByIdAndDelete(id);
//     if (!deletedRequest) {
//       return res.status(404).json({ error: 'Material request not found' });
//     }
//     res.json({ message: 'Material request deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting material request:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Create multer instance with specified storage

// app.listen(3001, () => {
//   console.log(`Server is running on port`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // Add multer for handling file uploads
const MaterialRequest = require('./MaterialRequest');
const Document = require('./Document');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null,'C:/uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); // Use the original filename for the uploaded file
  }
});

const upload = multer({ storage: storage });

// Route handler for uploading documents
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // File has been successfully uploaded
  const filename = req.file.originalname;
  const uploadedDocument = new Document({ filename: filename });

  try {
    // Save the document metadata to the database
    await uploadedDocument.save();
    res.status(200).json({ message: 'File uploaded successfully', filename: filename });
  } catch (error) {
    console.error('Error saving document metadata to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

mongoose.connect('mongodb://localhost:27017/stationary_db', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/MaterialRequest', (req, res) => {
  const { material, studentName, college, branch, phoneNumber } = req.body;
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();

  MaterialRequest.create({
    material,
    studentName,
    college,
    branch,
    phoneNumber,
    date: isoDate
  })
  .then(() => {
    res.status(200).json({ message: 'Material request submitted successfully' });
  })
  .catch((error) => {
    console.error('Error submitting material request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

app.get('/MaterialRequest', async (req, res) => {
  try {
    const requests = await MaterialRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).send('Error retrieving material requests');
  }
});

app.delete('/MaterialRequest/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRequest = await MaterialRequest.findByIdAndDelete(id);
    if (!deletedRequest) {
      return res.status(404).json({ error: 'Material request not found' });
    }
    res.json({ message: 'Material request deleted successfully' });
  } catch (error) {
    console.error('Error deleting material request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});