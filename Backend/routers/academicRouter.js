const express = require('express');
const Academics = require('../modules/academicsmodel');

const router = express.Router();

// Create operation
router.post('/academics', async (req, res) => {
    try {
        const newAcademics = await Academics.create(req.body);
        res.status(201).json(newAcademics);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read operation
router.get('/academics', async (req, res) => {
    try {
        const academics = await Academics.find();
        res.json(academics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update operation
router.patch('/academics/:id', async (req, res) => {
    try {
        const updatedAcademics = await Academics.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAcademics);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete operation
router.delete('/academics/:id', async (req, res) => {
    try {
        await Academics.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Academics' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
