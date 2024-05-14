// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'], // Only allow 'user' or 'admin' roles
    default: 'user' // Default role is 'user'
  }
});

const User = mongoose.model('Users', userSchema);

module.exports = User;

