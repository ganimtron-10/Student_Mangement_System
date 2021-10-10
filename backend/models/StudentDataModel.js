import mongoose from "mongoose";

const schema = mongoose.Schema;

const studentDataSchema = new schema({
    firstName : {
        type: String,
        required: true
    },
    middleName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    gender:{
        type: Boolean,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    mobileNumber:{
        type: Number,
        required: true
    },
    classOfStuding:{
        type: String,
        required: true
    },
    divsion:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    }
});

const studentLoginSchema = new schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const studentData = mongoose.model('studentData', studentDataSchema)
const studentLogin = mongoose.model('studentLogin', studentLoginSchema)

export {studentData,studentLogin}