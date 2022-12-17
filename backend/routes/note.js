const express = require('express');
const Note = require('../models/Note');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser=require('../middleware/fetchuser')

// Route 1- Add a Note --- Login required
router.post('/addnote',fetchuser,[
    body('title',"Enter the valid title").isLength({min:3}),
    body('description',"Enter the valid description").isLength({min:10}),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {title,description} =req.body;
        const note=new Note({ title,description,user:req.user.id})
        const savedNote=await note.save();
        res.json(savedNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2- Get the notes of the loggedin user -- Login required

router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
        const notes=await Note.find({user:req.user.id});
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// Route 3- Delete the note -- Login required

router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
    try {
        let note=await Note.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not Found");
        }

        if(note.user.toString()!==req.user.id){
            return res.status(401).send("Not allowed");
        }

        note =await Note.findByIdAndDelete(req.params.id);
        res.json({Success:"Note has been deleted",note:note});

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports=router;