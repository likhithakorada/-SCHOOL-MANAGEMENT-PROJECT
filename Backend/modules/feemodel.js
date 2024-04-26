const mongoose = require('mongoose');

// Define schema for fee structure
const FeeStructureSchema = new mongoose.Schema({
  gradeLevel: {
    type: String,
    required: true
  },
  structureFeeAmount: {
    type: Number,
    required: true
  },
  paymentFrequency: {
    type: String,
    enum: ['Monthly', 'Quarterly', 'Annually'],
    required: true
  }
});

// Define model for fee structure
const FeeStructure = mongoose.model('FeeStructure', FeeStructureSchema);

module.exports = FeeStructure;

