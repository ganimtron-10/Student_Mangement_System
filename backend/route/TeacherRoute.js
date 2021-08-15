import express from "express";
import teacherData  from "../models/TeacherDataModel.js";

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

router.route('/:id').get((req,res) => {
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
                                    classOfStuding:classOfStuding,
                                    divsion:divsion,
                                    branch:branch
                                },
                                (err,docs => {
                                    if (err){
                                        res.status(400).json('Error: '+err)
                                    }
                                    else{
                                        console.log('Updated '+docs)
                                    }
                                })
            )
})

export default router
