const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.getAllNotes);

// Route to get a single memory by ID
router.get('/:id', noteController.getNoteById);

// Route to create a new memory
router.post('/', noteController.createNote);

// Route to update a memory
router.put('/:id', noteController.updateNote);

// Route to delete a memory
router.delete('/:id', noteController.deleteNote);

module.exports = router;