import mongoose from "mongoose";

const schema = mongoose.Schema;
const teacherDataSchema = new schema({
    firstName:{
        type: String,
        required: true,
    },
    middleName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    dateOfBirth:{
        type: Date,
        required: true,
    },
    gender:{
        type:Boolean,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    mobileNumber:{
        type: Number,
        required: true,
    },
    qulification:{
        type: String,
        required: true,
    },
    classOfTeaching:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
});

const teacherLoginSchema = new schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const teacherData = mongoose.model('teacherData',teacherDataSchema)

const teacherLogin = mongoose.model('teacherLogin',teacherLoginSchema)

export {teacherData, teacherLogin}