import mongoose from "mongoose";

const schema = mongoose.Schema;

const studentDataSchema = new schema({
    firstName : {
        type: String,
        require: true
    },
    middleName : {
        type: String,
        require: true
    },
    lastName : {
        type: String,
        require: true
    },
    dateOfBirth:{
        type: Date,
        require: true
    },
    gender:{
        type: Boolean,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    mobileNumber:{
        type: Number,
        require: true
    },
    classOfStuding:{
        type: String,
        require: true
    },
    divsion:{
        type: String,
        require: true
    },
    branch:{
        type: String,
        require: true
    }
});

const studentLoginSchema = new schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
})

const studentData = mongoose.model('studentData', studentDataSchema)
const studentLogin = mongoose.model('studentLogin', studentLoginSchema)

export {studentData,studentLogin}