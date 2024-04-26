import dotenv from "dotenv";
import { app } from "./app"


const PORT = process.env.PORT || 4000

const startServer = () => {

    app.listen(PORT, () => {
        console.log(`server ${PORT} is running`);
    })

}

startServer()







