import { Router } from "express";
import { JWTmiddleware } from "../middlewares/jwt-middleware";

export const router = Router()

router.get("/", JWTmiddleware, (req, res) => {

    res.send("mHDIEH?")

    // jwt verify 
    // if (verify) => username  else => res.400. loging again
    // method (username , post) => 
    //login > 
    // username 
    // password
    //<form action="/login">
    //<inpute user name>
    // sumbimt
    // orders > href ="/orders/list "
    //usern => user 
    // add post 
})