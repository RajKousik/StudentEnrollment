const express = require("express");
const router = express.Router();
// const studentsModel = require('../models/students')  

const imageUpload = require('../middlewares/imageUpload');

const {getAllStudentDetails, createStudent, getStudent, getStudentDetail, updateStudent, deleteStudent} = require('../controllers/student.js')



router.route('/').get(getAllStudentDetails)
router.route('/').post(imageUpload.single('profilePic'), createStudent)

router.route('/:id').get(getStudent, getStudentDetail); //first calling middleWare and then the function
router.route('/:id').patch(getStudent, updateStudent);
router.route('/:id').delete(getStudent, deleteStudent);


// router.get('/', async(req, res) =>
// {
//     try{   
//         const students = await studentsModel.find();
//         res.status(200).json(students);
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({message : err.message});
//     }
// })

// router.post('/', async (req, res)=>{
    
//     const newStudent = new studentsModel({
//         name : req.body.name,
//         enrolledDepartment : req.body.enrolledDepartment,
//         enrollmentDate : req.body.enrollmentDate 
//     })

//     try{
//         const student = await newStudent.save();
//         res.status(201).json(student);
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({message: err.message});
//     }

// })

// router.get('/:id', getStudent,(req, res)=>{
//     // res.send(`Displaying students info with id ${req.params.id}`);

//     try{   
//         // const students = await studentsModel.find({_id : req.params.id});
//         res.status(200).json(res.student);
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({message : err.message});
//     }

// })

// router.patch('/:id', getStudent,async (req, res) => {
//     if(req.body.name != null)
//     {
//         res.student.name = req.body.name
//     }
//     if(req.body.enrolledDepartment != null)
//     {
//         res.student.enrolledDepartment = req.body.enrolledDepartment
//     }
//     if(req.body.enrollmentDate != null)
//     {
//         res.student.enrollmentDate = req.body.enrollmentDate
//     }

//     try{
//         const updatedStudent = await res.student.save()
//         res.status(200).json(updatedStudent)
//     }

//     catch(error){
//         res.status(400).json({message: error.message})
//     }
// })

// router.delete('/:id', getStudent, async(req, res) => {
//     try{
//         await res.student.deleteOne()
//         res.status(200).json({message: `Deleted User : ${res.student.name}`})
//     }

//     catch(error){
//         res.status(400).json({message: error.message})
//     }
// })

// async function getStudent(req, res, next) {
//     let student;
//     try
//     {
//         student = await studentsModel.findById(req.params.id);
//         if(student == null)
//         {
//             return res.status(404).json({Message : `User Not Found with id ${req.params.id}`})
//         }
//     }
//     catch(err)
//     {
//         console.log(err);
//         return res.status(500).json({message : err.message});
//     }
//     res.student = student;
//     next();
// } 

module.exports = router;