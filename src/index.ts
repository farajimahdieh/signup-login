import express from "express"
import { router } from "./router"
const app = express()


app.use(express.json())


app.use("/register", router)



app.listen(3000, () => {
    console.log("it is running, hooooooora!")
})

