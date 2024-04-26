const express = require('express');
const router = express.Router();
const StudentEnrollmentModel = require('../modules/studentenrollmodel');

// Create operation
router.post('/students', async (req, res) => {
    try {
        const newStudent = await StudentEnrollmentModel.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read operation (Get all students)
router.get('/students', async (req, res) => {
    try {
        const students = await StudentEnrollmentModel.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read operation (Get student by ID)
router.get('/students/:id', async (req, res) => {
    try {
        const student = await StudentEnrollmentModel.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update operation
router.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await StudentEnrollmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete operation
router.delete('/students/:id', async (req, res) => {
    try {
        await StudentEnrollmentModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
