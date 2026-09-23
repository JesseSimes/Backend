const express = require("express");
const connectDB= require("./config/db");
const NotesModel= require ("../src/models/note.modle")
const app = express();

app.use(express.json())

connectDB();

app.get("/", (req,res) => {
    res.send("Done");
})

app.post("/create", async (req, res) => {
    let {title, description} = req.body;

    const newNotes= await NotesModel.create({
        title,
        description,
    });

    res.send({
        success: true,
        message: "Data created successfully",
        data: newNotes,
    });
})

module.exports = app;