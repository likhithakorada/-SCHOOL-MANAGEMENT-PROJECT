// const express = require('express');
// const router = express.Router();
// const FeeStructure = require('../modules/feemodel');

// // Route to create a new fee structure
// router.post('/feestructure', async (req, res) => {
//   try {
//     const { gradeLevel, structureFeeAmount, paymentFrequency } = req.body;
//     const feeStructure = new FeeStructure({ gradeLevel, structureFeeAmount, paymentFrequency });
//     await feeStructure.save();
//     res.status(201).json(feeStructure);
//   } catch (error) {
//     console.error('Error creating fee structure:', error);
//     res.status(500).json({ error: 'An error occurred while creating fee structure' });
//   }
// });

// // Route to retrieve all fee structures
// router.get('/feestructure', async (req, res) => {
//   try {
//     const feeStructures = await FeeStructure.find();
//     res.json(feeStructures);
//   } catch (error) {
//     console.error('Error fetching fee structures:', error);
//     res.status(500).json({ error: 'An error occurred while fetching fee structures' });
//   }
// });

// // Route to update a fee structure by ID
// router.put('/feestructure/:id', async (req, res) => {
//   try {
//     const { gradeLevel, structureFeeAmount, paymentFrequency } = req.body;
//     const feeStructure = await FeeStructure.findByIdAndUpdate(req.params.id, 
//       { gradeLevel, structureFeeAmount, paymentFrequency },
//       { new: true }
//     );
//     if (!feeStructure) {
//       return res.status(404).json({ error: 'Fee structure not found' });
//     }
//     res.json(feeStructure);
//   } catch (error) {
//     console.error('Error updating fee structure:', error);
//     res.status(500).json({ error: 'An error occurred while updating fee structure' });
//   }
// });

// // Route to delete a fee structure by ID
// router.delete('/feestructure/:id', async (req, res) => {
//   try {
//     const feeStructure = await FeeStructure.findByIdAndDelete(req.params.id);
//     if (!feeStructure) {
//       return res.status(404).json({ error: 'Fee structure not found' });
//     }
//     res.json({ message: 'Fee structure deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting fee structure:', error);
//     res.status(500).json({ error: 'An error occurred while deleting fee structure' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const FeeStructure = require('../modules/feemodel');

// Route to create a new fee structure
router.post('/feestructure', async (req, res) => {
  try {
    const { gradeLevel, structureFeeAmount, paymentFrequency } = req.body;

    // Check if all required fields are provided
    if (!gradeLevel || !structureFeeAmount || !paymentFrequency) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate structureFeeAmount to be a positive number
    if (isNaN(structureFeeAmount) || structureFeeAmount <= 0) {
      return res.status(400).json({ error: 'Structure fee amount must be a positive number' });
    }

    // Validate paymentFrequency to be one of the specified options
    const validPaymentFrequencies = ['Monthly', 'Quarterly', 'Annually'];
    if (!validPaymentFrequencies.includes(paymentFrequency)) {
      return res.status(400).json({ error: 'Invalid payment frequency' });
    }

    // Create new fee structure document
    const feeStructure = new FeeStructure({ gradeLevel, structureFeeAmount, paymentFrequency });
    await feeStructure.save();

    // Send response
    res.status(201).json(feeStructure);
  } catch (error) {
    console.error('Error creating fee structure:', error);
    res.status(500).json({ error: 'An error occurred while creating fee structure' });
  }
});

module.exports = router;
