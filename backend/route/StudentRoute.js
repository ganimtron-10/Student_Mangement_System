import express from "express";
import studentData from "../models/StudentDataModel.js";

const router = express.Router()

router.route('/').get((req,res) => {
    studentData.find()
               .then(studentdata => res.json(studentdata))
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
    const classOfStuding = req.body.classOfStuding
    const divsion = req.body.divsion
    const branch = req.body.branch

    const student = new studentData({firstName,middleName,lastName,dateOfBirth,gender,
                                    address,mobileNumber,classOfStuding,divsion,branch})

    student.save()
           .then(() => res.json('Student Added!'))
           .catch(err => res.status(400).json('Error: '+err))
})

export default router