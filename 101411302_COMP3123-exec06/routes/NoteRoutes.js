const noteModel = require("../models/NotesModel.js");
const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post("/notes", async (req, res) => {
  //TODO - Write your code here to save the note
  try {
    const note = new noteModel({
      noteTitle: req.body.noteTitle,
      noteDescription: req.body.noteDescription,
      priority: req.body.priority,
      dateAdded: req.body.dateAdded,
      dateUpdated: req.body.dateUpdated,
    });
    const data = await note.save();
    res.json(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Note.",
    });
  }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get("/notes", async (req, res) => {
  //TODO - Write your code here to returns all note
  try {
    const notes = await noteModel.find();
    res.json(notes);
  } catch (err) {
    res.status(500).send({ message: "Error occurred while retrieving notes" });
  }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get("/notes/:noteId", async (req, res) => {
  //TODO - Write your code here to return onlt one note using noteid
  try {
    const note = await noteModel.findById(req.params.noteId);
    if (!note) {
      return res
        .status(404)
        .send({ message: "Note not found with id " + req.params.noteId });
    }
    res.json(note);
  } catch (err) {
    res.status(500).send({
      message:
        "Error occurred while retrieving note with id " + req.params.noteId,
    });
  }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put("/notes/:noteId", async (req, res) => {
  //TODO - Write your code here to update the note using noteid
    try {
      const note = await noteModel.findByIdAndUpdate(
        req.params.noteId,
        req.body,
        { new: true }
      );
      if (!note) {
        return res
          .status(404)
          .send({ message: "Note not found with id " + req.params.noteId });
      }
      res.json(note);
    } catch (err) {
      res.status(500).send({
        message:
          "Error occurred while updating note with id " + req.params.noteId,
      });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete("/notes/:noteId", async (req, res) => {
  //TODO - Write your code here to delete the note using noteid
  try {
    const note = await noteModel.findByIdAndRemove(req.params.noteId);
    if (!note) {
      return res
        .status(404)
        .send({ message: "Note not found with id " + req.params.noteId });
    }
    res.send({ message: "Note deleted successfully!" });
  } catch (err) {
    res.status(500).send({
      message:
        "Error occurred while deleting note with id " + req.params.noteId,
    });
  }
});

module.exports = router;