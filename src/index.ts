import dotenv from "dotenv-flow"
import express from "express"
import { router as registerRouter } from "./routes/signup-router"
import {router as loginRouter} from "./routes/login-router"
import {router as inforouter} from "./routes/seeinfo-router"
import "reflect-metadata"
import { AppDataSource } from "./data-source"
import { UserRepository } from "./user-repository"
import { userRepo } from "./dependancy"
const app = express()


app.use(express.json())



app.use("/register", registerRouter)
app.use("/login", loginRouter)
app.use("/seeinfo", inforouter)


AppDataSource.initialize().then(()=>{
    console.log("db is ok")
    app.listen(3000, () => {
    console.log("it is running, hooooooora!")}
)

})

