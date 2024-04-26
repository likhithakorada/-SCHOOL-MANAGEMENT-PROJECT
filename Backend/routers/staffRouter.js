// Import necessary modules and initialize your Express Router
const express = require('express');
const router = express.Router();

// Middleware to parse JSON request bodies
router.use(express.json());
const Staff = require('../modules/staffmodel');


// Assuming you have some data store or database set up
// For simplicity, let's assume you have an array to store staff information
let staffList = [];

// POST endpoint to create a new staff member
router.post('/api/staff', async(req, res) => {
  const { type, name, contactInfo, dateOfJoining } = req.body;

  // Assuming validation is done on the frontend, add basic validation here if needed

  // Add the new staff member to the data store
  // staffList.push({ type, name, contactInfo, dateOfJoining });
  const newstaff = new Staff({ type, name, contactInfo, dateOfJoining  });
  await newstaff.save();

  // Send a success response
  res.status(201).json({ message: 'Staff member added successfully' });
});

// GET endpoint to fetch all staff members
router.get('/api/staff', (req, res) => {
  // Return all staff members
  res.json(staffList);
});

// PUT endpoint to update a staff member by name
router.put('/api/staff/:name', (req, res) => {
  const { name } = req.params;
  const { type, contactInfo, dateOfJoining } = req.body;

  // Find the staff member by name
  const index = staffList.findIndex(staff => staff.name === name);

  if (index !== -1) {
    // Update the staff member
    staffList[index] = { ...staffList[index], type, contactInfo, dateOfJoining };
    res.json({ message: 'Staff member updated successfully' });
  } else {
    res.status(404).json({ message: 'Staff member not found' });
  }
});

// DELETE endpoint to delete a staff member by name
router.delete('/api/staff/:name', (req, res) => {
  const { name } = req.params;

  // Filter out the staff member with the provided name
  staffList = staffList.filter(staff => staff.name !== name);

  res.json({ message: 'Staff member deleted successfully' });
});

// Export the router
module.exports = router;
