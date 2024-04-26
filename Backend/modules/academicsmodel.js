const mongoose = require('mongoose');

const academicsSchema = new mongoose.Schema({
  className: { type: String, required: true },
  gradeLevel: { type: Number, required: true },
  section: { type: String, required: true },
  teacherAssigned: { type: String, required: true },
  studentId: { type: Number, required: true },
  classId: { type: Number, required: true },
  academicYear: { type: Number, required: true },
  teacherName: { type: String, required: true },
  subjectExpertise: { type: String, required: true },
  contactInformation: { type: Number, required: true }
});

module.exports = mongoose.model('Academics', academicsSchema);
