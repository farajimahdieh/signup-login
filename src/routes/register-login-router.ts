import { Router } from "express";
import { userRepo, userService } from "../dependancy";
import { userDataZod, userDataZodWithoutEmail } from "../utils/validator/user.dto";

import { ZodError } from "zod";

export const routerSignup = Router()


routerSignup.post("/register", async(req, res) =>{

    try
        {   const {username, password, email} = userDataZod.parse(req.body)
            try{
                
                await userRepo.addUser({ email, username, password })
                res.status(200).send("ok")


                }
                
                catch(e){
                    res.status(400).json({"code" : "USER_ALREADY_EXISTS"})
                }
        }catch(e){

            if(e instanceof ZodError)

                res.status(400).json({"code" : "VALIDATION_ERROR"})
        }

    

})


export const routerLogin = Router()

routerLogin.post("/login", async (req, res) => {

    try {

        const {username, password} = userDataZodWithoutEmail.parse(req.body)
        // if ({username, password} instanceof ZodError){

        //     res.status(400).json({ "code": ErrorCodes.VALIDATION_ERROR});
        // }
        const token = await userService.loginUser({username, password})
        if (token instanceof Error){
            res.status(400).json({"code" : token.message})
        }
        else res.cookie("jwt", token).send("ok")
            

    }catch(e) {
        res.status(400).json({ "code": "VALIDATION_ERROR"});
    }
});

