import express from "express";
import {studentData,studentLogin} from "../models/StudentDataModel.js";

const router = express.Router()

router.route('/').get((req,res) => {
    studentData.find()
               .then(studentdata => res.json(studentdata))
               .catch(err => res.status(400).json('Error: '+err))
})

router.route('/add').post((req,res) => {
    const firstName = req.body.firstName
    const middleName = req.body.middleName
    const lastName = req.body.lastName
    const dateOfBirth = Date.parse(req.body.dateOfBirth)
    const gender = Boolean(req.body.gender)
    const address = req.body.address
    const mobileNumber = Number(req.body.mobileNumber)
    const classOfStuding = req.body.classOfStuding
    const divsion = req.body.divsion
    const branch = req.body.branch

    const student = new studentData({firstName,middleName,lastName,dateOfBirth,gender,
                                    address,mobileNumber,classOfStuding,divsion,branch})

    student.save()
           .then(() => res.json('Student Added!'))
           .catch(err => res.status(400).json('Error: '+err))
})

router.route('/get/:id').get((req,res) => {
    studentData.findById(req.params.id)
               .then(studentdata => res.json(studentdata))
               .catch(err => res.status(400).json('Error: '+err))
})

router.route('/delete/:id').delete((req,res) => {
    studentData.findByIdAndDelete(req.params.id)
               .then(() => res.json('Student Deleted!'))
               .catch(err => res.status(400).json('Error: '+err))
})

router.route('/update/:id').post((req,res) => {
    const firstName = req.body.firstName
    const middleName = req.body.middleName
    const lastName = req.body.lastName
    const dateOfBirth = Date.parse(req.body.dateOfBirth)
    const gender = Boolean(req.body.gender)
    const address = req.body.address
    const mobileNumber = Number(req.body.mobileNumber)
    const classOfStuding = req.body.classOfStuding
    const divsion = req.body.divsion
    const branch = req.body.branch

    studentData.findByIdAndUpdate(req.params.id,
                                    {
                                    firstName:firstName,
                                    middleName:middleName,
                                    lastName:lastName,
                                    dateOfBirth:dateOfBirth,
                                    gender:gender,
                                    address:address,
                                    mobileNumber:mobileNumber,
                                    classOfStuding:classOfStuding,
                                    divsion:divsion,
                                    branch:branch
                                    })
               .then(() => res.json('Student Updated!'))
               .catch(err => res.status(400).json('Error: '+err))
})

router.route('/login').post((req,res) => {
    const username = req.body.username
    const password = req.body.password

    studentLogin.findOne({username})
                .then(studentdata => res.json(studentdata)) //check whether the password is same then swnd the data
                .catch(err => res.status(400).json('Error: '+err))
})

router.route('/register').post((req,res) => {
    const username = req.body.username
    const password = req.body.password

    const studentlogin = new studentLogin({username,password})

    studentlogin.save()
                .then(res.json("Student Login Credantial Created Sucessfully!"))
                .catch(err => res.status(400).json('Error: '+err))
})

export default router