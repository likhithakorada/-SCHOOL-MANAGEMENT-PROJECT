// GradeModel.js

const mongoose = require('mongoose');

const gradesSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  }
});

const Grades = mongoose.model('Grades', gradesSchema);

module.exports = Grades;
