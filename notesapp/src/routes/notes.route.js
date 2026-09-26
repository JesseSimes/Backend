const express = require ("express");
const {
    createNotesController,
    getAllNotesController,
    singleNoteController,
    updatedNotesController,
    deleteNotesController
} = require ("../controllers/notes.controller");
const NotesModel = require("../models/notes.model");

const router = express.Router();

//CREATE
router.post("/create", createNotesController);

//READ
router.get("/allNotes", getAllNotesController);

//READ ONE
router.get("/:id", singleNoteController);

//UPDATE
router.put("/:id", updatedNotesController)

//DELETE
router.delete("/:id", deleteNotesController)

module.exports = router;