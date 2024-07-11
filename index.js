import express from "express";
const app =express();
import  Connection  from "./db/conn.js";
import dotenv from "dotenv"

dotenv.config()
const PORT= process.env.PORT;
Connection()
app.listen(PORT,()=>{
    console.log("backend is running")
})
