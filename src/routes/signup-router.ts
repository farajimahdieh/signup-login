import { Router } from "express";
import { userRepo } from "../dependancy";
import { userDataZod } from "../user.dto";
import { User } from "../types/user-type";
import { ZodError } from "zod";
import { omit } from "zod/v4/core/util.cjs";
export const router = Router()


router.post("/", async(req, res) =>{

    try
        {   const {username, password, email} = userDataZod.parse(req.body)
            try{
                
                await userRepo.addUser({ email, username, password })
                res.status(200).send("User added successfully!") 

                }
                
                catch(e){
                    res.status(400).send("User already exists!")
                }
        }catch(e){

            if(e instanceof ZodError)

                res.status(400).send("Validation Error!")
        }

    

})

