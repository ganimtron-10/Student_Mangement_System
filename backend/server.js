import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentRoute from "./route/StudentRoute.js";
import teacherRoute from "./route/TeacherRoute.js";

dotenv.config();
const uri = process.env.DBURI
const port = 5000

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {console.log("Connected to db.")})

const app = express();

app.use(cors());
app.use(express.json());

app.use('/student',studentRoute)
app.use('/teacher',teacherRoute)
app.use('*', (req,res) => res.status(404).json({error: 'Not Found'}))

app.listen(port, () => {
	console.log(`Server running on the port ${port}`)
})