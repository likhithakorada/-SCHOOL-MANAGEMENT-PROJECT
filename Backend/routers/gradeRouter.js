const express = require('express');
const router = express.Router();
const Grades = require('../modules/grademodel');

// Route to get all grades
router.get('/', async (req, res) => {
  try {
    const grades = await Grades.find();
    res.json(grades);
  } catch (error) {
    console.error('Error fetching grades:', error);
    res.status(500).json({ error: 'An error occurred while fetching grades' });
  }
});

// Route to add a new grade
router.post('/', async (req, res) => {
  try {
    const { studentName, course, grade } = req.body;
    const newGrade = new Grades({ studentName, course, grade });
    await newGrade.save();
    res.status(201).json({ message: 'Grade added successfully', grade: newGrade });
  } catch (error) {
    console.error('Error adding grade:', error);
    res.status(500).json({ error: 'An error occurred while adding the grade' });
  }
});

// Route to delete a grade by ID
router.delete('/:id', async (req, res) => {
  try {
    const gradeId = req.params.id;
    const deletedGrade = await Grades.findByIdAndDelete(gradeId);
    if (!deletedGrade) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.json({ message: 'Grade deleted successfully' });
  } catch (error) {
    console.error('Error deleting grade:', error);
    res.status(500).json({ error: 'An error occurred while deleting the grade' });
  }
});

module.exports = router;
