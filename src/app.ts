import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router/router";
import cors from "cors";


dotenv.config()

export const app = express()
// use cors
app.use(cors())

app.use(express.json())
app.use('/api', router)
