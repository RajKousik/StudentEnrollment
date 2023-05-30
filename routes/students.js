const express = require("express");
const router = express.Router();
const studentsModel = require('../models/students')

router.get('/', async(req, res) =>
{
    try{   
        const students = await studentsModel.find();
        res.status(200).json(students);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }
})

router.post('/', async (req, res)=>{
    
    const newStudent = new studentsModel({
        name : req.body.name,
        enrolledDepartment : req.body.enrolledDepartment,
        enrollmentDate : req.body.enrollmentDate 
    })

    try{
        const student = await newStudent.save();
        res.status(201).json(student);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: err.message});
    }

})

router.get('/:id', async(req, res)=>{
    // res.send(`Displaying students info with id ${req.params.id}`);

    try{   
        const students = await studentsModel.find({name : req.params.id});
        res.status(200).json(students);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }

})

router.patch('/:id', (req, res)=>{
    res.send(`Updating students info with id ${req.params.id}`);
})

router.delete('/:id', async(req, res)=>{
    // res.send(`Deleting students info with id ${req.params.id}`);

    try{   
        const students = await studentsModel.deleteOnegit ({name : req.params.id});
        res.status(200).json(students);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }
})

module.exports = router;