const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HistorySchema = new Schema({
  date: Date,
  title: String,
  desc: String,
  images: [String]
})

let PatientSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  history: [HistorySchema]
});

// Export the model
module.exports = mongoose.model('Patient', PatientSchema);