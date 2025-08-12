import { Router } from "express"
import { userDataZod } from "../user.dto"
import { userRepo } from "../dependancy"
import { ZodError } from "zod"

export const router = Router()



router.post("/", (req, res) =>{

    // try
    //     {   const {username, password} = userDataZod.parse(req.body)
            try{
                const {username, password} = (req.body)
                if(userRepo.findUserByUsername(username)){
                userRepo.matchUserWithPassword(username, password)
                res.status(200).json({"status" :"ok"})
                }else{res.status(400).json({"status" :"Validation Error!"})
                }
                
            }catch(e){
                    res.status(400).json({"status" :"Validation Error!"}) // is this a validation error?
                }
        // }catch(e){

        //     if(e instanceof ZodError)

        //         res.status(400).send("Validation Error!")
        // }

    

})

