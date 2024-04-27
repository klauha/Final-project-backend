import dotenv from "dotenv";
import { app } from "./app"
import { AppDataSource } from "./database/db";

const PORT = process.env.PORT || 4000

const startServer = () => {
    AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`server ${PORT} is running`);
        })
    })
    .catch(error => { console.log(error) })
}

startServer()





