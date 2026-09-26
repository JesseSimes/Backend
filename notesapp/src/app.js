const express = require("express");
const NotesModel = require("./models/notes.model");
const createNotesController = require("./controllers/notes.controller")
const notesRoute = require("./routes/notes.route")

const app = express();

app.use(express.json());

const connectDB = require("./config/db")
connectDB();

app.get("/", (req,res) => {
    res.send("ok got it")
})

app.use("/notes", notesRoute);

module.exports = app;