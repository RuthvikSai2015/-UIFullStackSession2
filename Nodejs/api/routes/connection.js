const mongoose = require('mongoose');
const url ="mongodb://localhost:27017/studentsDB";
mongoose.connect(url);
mongoose.connection.on('connected',function(){
    console.log('Mongoose connected to '+url);
})
const studentsSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: [true,'StudentId is manadatory']
    },
    studentName:{
        type:String,
        reqired:[false,'Student Name is not required ']
    },
    studentMarks: {
        type:String,
        reqired:[false,'Student Marks is not required ']
    }
})

//const userSchema 
exports.Students = mongoose.model('students',studentsSchema);