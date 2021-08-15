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

router.route('/:id').get((req,res) => {
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
                                    },
                                    (err,docs) => {
                                        if(err){
                                            res.status(400).json('Error: '+err)
                                        }
                                        else{
                                            console.log('Updated '+docs)
                                        }
                                    }
                                )
})

export default router