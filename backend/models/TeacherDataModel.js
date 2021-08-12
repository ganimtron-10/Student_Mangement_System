import mongoose from "mongoose";

const schema = mongoose.Schema();
const teacherSchema = new schema({
    firstName:{
        type: String,
        require: true,
    },
    middleName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    dateOfBirth:{
        type: Date,
        require: true,
    },
    gender:{
        type:Boolean,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    mobileNumber:{
        type: Number,
        require: true,
    },
    qulification:{
        type: String,
        require: true,
    },
    classOfTeaching:{
        type: String,
        require: true,
    },
    subject:{
        type: String,
        require: true,
    },
});

const teacherData = mongoose.model('teacherData',teacherSchema)

export default teacherData

