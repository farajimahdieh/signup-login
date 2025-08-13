import dotenv from "dotenv-flow"
import express from "express"
import { router as registerRouter } from "./routes/signup-router"
import {router as loginRouter} from "./routes/login-router"

const app = express()


app.use(express.json())



app.use("/register", registerRouter)
app.use("/login", loginRouter)

app.listen(3000, () => {
    console.log("it is running, hooooooora!")
})

