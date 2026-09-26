const NotesModel = require ("../models/notes.model")

const createNotesController = async (req,res) => {
    try{
        let {title, description} = req.body;

        let newNote= await NotesModel.create({
            title,
            description
        });

        return res.status(201).json({
            message:"Note created successfully",
            data: newNote,
        });
    }
    catch(error){
        console.log("error in creation", error);
    }
}


const getAllNotesController = async (req,res) => {
    try {
        
        const allnotes = await NotesModel.find();
        res.status(200).json({
            message:"All notes fetched",
            data:allnotes,
        });

    } catch (error) {
        console.log("Error in getting notes api", error)
    }
}


const singleNoteController = async (req,res) =>{
    try {
        let noteId = req.params.id;

        let note = await NotesModel.findById(noteId);

        res.status(200).json({
            message:"Receieved note successfully",
            data: note,
        })
        } catch (error) {
        console.log("Error in api fetch", error)
    }
}


const updatedNotesController = async (req,res) => {
    try {
        let noteId = req.params.id;

        const body = req.body;

        let updatedNote= await NotesModel.findByIdAndUpdate(noteId, body);

        return res.status(200).json({
            mesage:'Note updated successfully',
            data:updatedNote
        })
        
    } catch (error) {
        console.log("Error delete id api", error)
    }
}


let deleteNotesController = async (req, res) =>{
    try {
        let notesId= req.params.id;

        await NotesModel.findByIdAndDelete(notesId);

        return res.status(200).json({
            message:'File deleted successfully',
        })
    } catch (error) {
        console.log("Error in ID fetch", error)
    }
}

module.exports = {
    createNotesController,
    getAllNotesController,
    singleNoteController,
    updatedNotesController,
    deleteNotesController
};