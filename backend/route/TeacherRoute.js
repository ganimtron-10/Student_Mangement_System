import express from "express";
import {teacherData, teacherLogin}  from "../models/TeacherDataModel.js";

const router = express.Router()

router.route('/').get((req,res) => {
    teacherData.find()
               .then(teacherdata => res.json(teacherdata))
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
    const qulification = req.body.qulification
    const classOfTeaching =req.body.classOfTeaching
    const subject = req.body.subject

    const teacher = new teacherData({firstName,middleName,lastName,dateOfBirth,gender,
                                    address,mobileNumber,qulification,classOfTeaching,subject})

    teacher.save()
           .then(() => res.json('Teacher Added!'))
           .catch(err => res.status(400).json('Error: '+err))
    
})

router.route('/get/:id').get((req,res) => {
    teacherData.findById(req.params.id)
               .then(teacherdata => res.json(teacherdata))
               .catch(err => res.status(400).json('Error: '+err))
})

router.route('/delete/:id').delete((req,res) => {
    teacherData.findByIdAndDelete(req.params.id)
               .then(() => res.json('Teacher Deleted!'))
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
    const qulification = req.body.qulification
    const classOfTeaching =req.body.classOfTeaching
    const subject = req.body.subject

    teacherData.findByIdAndUpdate(req.params.id,
                                { 
                                    firstName:firstName,
                                    middleName:middleName,
                                    lastName:lastName,
                                    dateOfBirth:dateOfBirth,
                                    gender:gender,
                                    address:address,
                                    mobileNumber:mobileNumber,
                                    qulification:qulification,
                                    classOfTeaching:classOfTeaching,
                                    subject:subject
                                })
                 .then(() => res.json('Teacher Updated!'))
                 .catch(err => res.status(400).json('Error: '+err))                
})

router.route('/login').post((req,res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(username,password)

    teacherLogin.findOne({
        username
    })
    .then((teacherdata) => {
        
        if(teacherdata != null)
        {
            res.json(teacherdata)
        }
        else{
            res.json("Error: Data Not found")
        }
    } )
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/register').post((req,res) => {
    const username = req.body.username
    const password = req.body.password

    const teacherlogin = new teacherLogin({
        username,password
    })

    teacherlogin.save()
    .then(res.json("Teacher login sucessful!"))
    .catch(err => res.status(400).json('Error: '+err))
})

export default router
