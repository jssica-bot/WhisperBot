const mongoose = require('mongoose');

// Struktur data yang sesuai dengan form booking kamu
const bookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  service: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export model supaya bisa digunakan di index.js
module.exports = mongoose.model('Booking', bookingSchema);
