import express from "express";
import { boolean } from "yargs";
import teacherData  from "../models/TeacherDataModel";

const router = express.Router()

router.route('/').get((req,res) => {
    teacherData.find()
               .then(teacherdata => res.json(teacherdata))
               .catch(err => res.status(400).json('Error: '+err))
})

router.route('/register').post((req,res) => {
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

