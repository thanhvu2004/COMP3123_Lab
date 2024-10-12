const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = mongoose.Schema({
  noteTitle: String,
  noteDescription: String,
  priority: {
    type: String,
    enum: ["HIGH", "LOW", "MEDIUM"],
    required: true,
  },
  dateAdded: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now },
});

const Note = mongoose.model('Note', NoteSchema); // Export the model
module.exports = Note;