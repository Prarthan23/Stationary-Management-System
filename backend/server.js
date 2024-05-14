// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User = require('./models/User');
// const MaterialRequest = require('./MaterialRequest');
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

// app.listen(3001, () => {
//   console.log(`Server is running on port`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // Add multer for handling file uploads
const MaterialRequest = require('./models/MaterialRequest');
const Document = require('./models/Document');
const User = require('./models/User');

const app = express();
const path = require('path');
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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
// app.post("/login", (req, res) => {
//   const { username, password, role } = req.body;

//   // Check if the role is "user"
//   if (role === "user") {
//     // Logic for user login
//     User.findOne({ username: username, role: "user" })
//       .then(user => {
//         if (user) {
//           if (user.password === password) {
//             res.json("Success");
//           } else {
//             res.json("Password incorrect");
//           }
//         } else {
//           res.json("User not exist");
//         }
//       })
//       .catch(error => {
//         console.error("Error finding user:", error);
//         res.status(500).json("Internal Server Error");
//       });
//   } 
//   // Check if the role is "admin"
//   else if (role === "admin") {
//     // Logic for admin login
//     User.findOne({ username: username, role: "admin" })
//       .then(admin => {
//         if (admin) {
//           if (admin.password === password) {
//             res.json("Success Admin");
//           } else {
//             res.json("Password incorrect");
//           }
//         } else {
//           res.json("Admin not exist");
//         }
//       })
//       .catch(error => {
//         console.error("Error finding admin:", error);
//         res.status(500).json("Internal Server Error");
//       });
//   } 
//   // Invalid role
//   else {
//     res.status(400).json("Invalid role");
//   }
// });
app.get("/", (req, res) => {
  res.send("Server is running");
})

app.post("/login", (req, res) => {
  const { username, password, role } = req.body;

  // Check if the role is "user" or "admin"
  if (role === "user" || role === "admin") {
    // Logic for user or admin login
    User.findOne({ username: username, role: role })
      .then(user => {
        if (user) {
          if (user.password === password) {
            // Return user details upon successful login
            res.json({ success: true, user: user });
          } else {
            res.json({ success: false, message: "Password incorrect" });
          }
        } else {
          res.json({ success: false, message: "User not exist" });
        }
      })
      .catch(error => {
        console.error("Error finding user:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
      });
  } else {
    res.status(400).json({ success: false, message: "Invalid role" });
  }
});

app.get('/userprofile/:username', async (req, res) => {
  const { username } = req.params;

  try {
    // Find the user profile by username
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/userdetails", (req, res) => {
  const { username } = req.query;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(404).json("User not found"); // User not found
      }
      res.status(200).json({ user: { username: user.username, phoneNumber: user.phoneNumber, role: user.role } });
    })
    .catch(error => {
      console.error("Error finding user:", error);
      res.status(500).json("Internal Server Error");
    });
});

// Set up multer storage for file uploads
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null,'C:/uploads/'); // Save uploaded files to the 'uploads' directory
//   },
//   filename: function(req, file, cb) {
//     cb(null, file.originalname); // Use the original filename for the uploaded file
//   }
// });

// const upload = multer({ storage: storage });

// // Route handler for uploading documents
// app.post('/upload', upload.single('file'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file uploaded' });
//   }

//   // File has been successfully uploaded
//   const filename = req.file.originalname;
//   const documentUrl = `http://localhost:3001/FetchDocument/${filename}`;
//   const uploadedDocument = new Document({ filename: filename, url: documentUrl});


//   try {
//     // Save the document metadata to the database
//     await uploadedDocument.save();
//     res.status(200).json({ message: 'File uploaded successfully', filename: filename });
//   } catch (error) {
//     console.error('Error saving document metadata to the database:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:/uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for the uploaded file
  },
});

const upload = multer({ storage: storage });

// Route handler for uploading documents
app.post('/upload', upload.array('files', 10), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }

  try {
    const {username} = req.body;
    const filenames = req.files.map((file) => file.originalname);
    const documentUrls = filenames.map((filename) => `http://localhost:3001/FetchDocument/${filename}`);

    // Save metadata for each uploaded document to the database
    await Promise.all(
      filenames.map(async (filename, index) => {
        const uploadedDocument = new Document({ filename: filename, url: documentUrls[index], username: username});
        return uploadedDocument.save();
      })
    );

    res.status(200).json({ message: 'Files uploaded successfully', filenames: filenames });
  } catch (error) {
    console.error('Error saving document metadata to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/FetchDocument', async (req, res) => {
  try {
    const documents = await Document.find().sort({ uploadTime: 1 }).select('filename username uploadTime');
    res.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/FetchDocument/:filename', async (req, res) => {
  const { filename } = req.params;
  const filePath = path.join('C:/uploads/', filename);

  // Stream the file to the client
  res.sendFile(filePath);
});
app.delete('/DeleteDocument/:id', (req, res) => {
  const { id } = req.params;

  // Find the document by ID
  Document.findById(id)
    .then(document => {
      if (!document) {
        return res.status(404).json({ error: 'Document not found' });
      }

      // Delete the document from the database
      Document.findByIdAndDelete(id)
        .then(() => {
          // Delete the file from the disk
          const filePath = `C:/uploads/${document.filename}`;
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log('Document file deleted successfully');
          } else {
            console.error('File does not exist:', filePath);
          }// Delete the file
          console.log('Document file deleted successfully');
          res.status(200).json({ message: 'Document deleted successfully' });
        })
        .catch(error => {
          console.error('Error deleting document:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    })
    .catch(error => {
      console.error('Error finding document:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
mongoose.connect('mongodb://localhost:27017/stationary_db', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/MaterialRequest', (req, res) => {
  const { material, studentName, college, branch, phoneNumber } = req.body;


  MaterialRequest.create({
    material,
    studentName,
    college,
    branch,
    phoneNumber,
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
const labManualsDirectory = path.join(__dirname, '..', 'STATIONARY-MANAGEMENT-SYSTEM', 'Labmanuals');

// Serve static files from the Labmanuals folder
app.use('/labmanuals', express.static(labManualsDirectory));

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});