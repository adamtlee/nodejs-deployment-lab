const Note = require('../models/noteModel');


const noteController = {
    async getAllNotes(req, res) {
        try {
            const notes = await Note.findAll();
            if (notes.length === 0) {
                return res.status(200).json({ message: 'No notes found' });
            }
            return res.status(200).json(notes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    
    async getNoteById(req, res) {
        try {
            const note = await Note.findByPk(req.params.id);
            if (note) {
                return res.status(200).json(note); // Send the note as a JSON response
            } else {
                return res.status(404).json({ error: 'Note not found' }); // Note not found
            }
        } catch (error) {
            return res.status(500).json({ error: error.message }); // Error handling
        }
    },
    
    async createNote(req, res) {
        try {
            const { title, description } = req.body;
            const note = await Note.create({ title, description });
            return res.status(201).json(note); // Properly send the created note as a JSON response
        } catch (error) {
            return res.status(500).json({ error: error.message }); // Handle error
        }
    },

    async updateNote(req, res) {
        try {
            const { title, description } = req.body;
            const note = await Note.findByPk(req.params.id);
            if (note) {
                note.title = title;
                note.description = description;
                await note.save();
                return res.status(200).json(note); // Properly send the updated note as a JSON response
            } else {
                return res.status(404).json({ error: 'Note not found' }); // Handle not found
            }
        } catch (error) {
            return res.status(500).json({ error: error.message }); // Handle error
        }
    },

    async deleteNote(req, res) {
        try {
            const note = await Note.findByPk(req.params.id);
            if (note) {
                await note.destroy();
                return res.status(204).send(); // Send a 204 No Content status
            } else {
                return res.status(404).json({ error: 'Note not found' }); // Handle not found
            }
        } catch (error) {
            return res.status(500).json({ error: error.message }); // Handle error
        }
    }
};


module.exports = noteController;