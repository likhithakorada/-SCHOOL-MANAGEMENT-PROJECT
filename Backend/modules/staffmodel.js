const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['teacher', 'principal', 'correspondent', 'generalStaff', 'officeBoy', 'peon'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  contactInfo: {
    type: Number,
    required: true
  },
  dateOfJoining: {
    type: Date,
    required: true
  }
});

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;
