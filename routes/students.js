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

router.get('/:id', getStudent,(req, res)=>{
    // res.send(`Displaying students info with id ${req.params.id}`);

    try{   
        // const students = await studentsModel.find({_id : req.params.id});
        res.status(200).json(res.student);
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
        const students = await studentsModel.deleteOne({name : req.params.id});
        res.status(200).json(students);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }
})

async function getStudent(req, res, next) {
    let student;
    try
    {
        student = await studentsModel.findById(req.params.id);
        if(student == null)
        {
            return res.status(404).json({Message : `User Not Found with id ${req.params.id}`})
        }
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({message : err.message});
    }
    res.student = student;
    next();
} 

module.exports = router;