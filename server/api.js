const mongoose = require('mongoose');

const Doctor = require('./models/Doctor')
const Patient = require('./models/Patient')

exports.getPatients = (req, res) => {
  Patient.find({}, function (err, patients) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Patients retrieved successfully",
      data: patients
    });
  });
}

exports.getPatient = (req, res) => {
  Patient.find({ email: req.params.email }, function (err, patients) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Patients retrieved successfully",
      data: patients
    });
  });
}

exports.getDoctor = (req, res) => {
  Doctor.find({ email: req.params.email }, function (err, doctor) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Doctor retrieved successfully",
      data: doctor
    });
  });
}

exports.addPatient = (req, res) => {
  let p = new Patient();
  p.name = "Mark A";
  p.email = "mark@gmail.com";
  p.gender = "male";
  p.age = 25;

  Doctor.find({ email: req.params.email }, function (err, doctor) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Doctor retrieved successfully",
      data: doctor
    });
  });
}