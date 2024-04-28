import express from "express";
import dotenv from "dotenv";
import router from "./router/router";

dotenv.config()

export const app = express()

app.use(express.json())
app.use('/api', router)
