import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentRoute from "./route/StudentRoute.js";
import teacherRoute from "./route/TeacherRoute.js";

dotenv.config();
const uri = process.env.DBURI

const app = express();
app.use(cors);
app.use(express.json());

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {console.log("Conneqcted to db.")})

app.use('/student',studentRoute)
app.use('/teacher',teacherRoute)

app.listen(8000, () => {
	console.log("Server running on the port 8000")})