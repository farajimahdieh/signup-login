import { Router } from "express"
import { userRepo, userService } from "../dependancy"
import { encryptJWT } from "../utils/jwt-utility"
import { userDataZod, userDataZodWithoutEmail } from "../utils/validator/user.dto";


export const router = Router()



// router.post("/", async(req, res) =>{

//     try{
//         const {username, password} = (req.body)
//         const user = await userRepo.findUserByUsername(username)
//         if(user){
//             if( await userRepo.matchUserWithPassword(username, password)){
//                 const email = user.email //////?????
//                 const token = encryptJWT({username : username, email : email})
//                 res.cookie("jwt", token).send({ ok: true })
            
//             }
//                     else{res.status(400).json({"status" :"Validation Error!"})
//         }
//             }else{res.status(400).json({"status" :"Validation Error!"})
//         }
        
//     }catch(e){
//             res.status(400).json({"status" :"Validation Error!"}) 
//         }
  
    
// })


router.post("/login", async (req, res) => {
    try {

        const { username, password } = userDataZodWithoutEmail.parse(req.body)
        try{
            const token = await userService.loginUser({username, password})
            res.cookie("jwt", token).send("ok")}

        catch(e){
            if (e instanceof Error)
            res.status(400).json({"code" : e.message})
        }    

    } catch (e) {
        res.status(400).json({ "code": "VALIDATION_ERROR"});
    }
});
