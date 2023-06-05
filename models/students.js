const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    enrolledDepartment : {
        type : String,
        required : true
    },
    enrollmentDate : {
        type : Date,
        default: Date.now()
    },
    profilePic :
    {
        // type : Buffer,
        // contentType : String,
        type : String,
        required : true
    }
})

module.exports = mongoose.model('studentModel', studentSchema);
