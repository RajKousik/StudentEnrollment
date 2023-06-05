require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const mongoose = require('mongoose')
const cors = require("cors")

app.use(cors());
app.use(express.json());

const students = require('./routes/students')

const multer = require('multer')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json());

mongoose.connect(process.env.DB_URL);

// mongoose.connect('mongodb://0.0.0.0/students')
const db = mongoose.connection

db.on('error' , errormsg => console.log(errormsg))
db.once('open', () => {
    console.log('Connection Established')
})

console.log("app.js")

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/api/v1/students', students)

app.listen(PORT, () => {
    console.log(`API is working on ${PORT}`)
})