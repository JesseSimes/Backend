const mongoose = require("mongoose")

//Scehma
const notesSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true,
        minlength: [20, "Minimum 20 characters are required"],
    },
});

//Model
const NotesModel = mongoose.model("notes", notesSchema)
module.exports = NotesModel;

