import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.DBURI

const app = express();
app.use(cors);
app.use(express.json());

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {console.log("Connected to db.")})

app.listen(8000, () => {
	console.log("Server running on the port 8000")})