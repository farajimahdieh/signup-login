import { Router } from "express"
import { userRepo } from "../dependancy"
import { encryptJWT } from "../utils/jwt-utility"


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


router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userRepo.findUserByUsername(username);

        if (user) {
            if (await userRepo.matchUserWithPassword(username, password)) {
                const email = user.email;
                const token = encryptJWT({ username: username, email: email });
                res.cookie("jwt", token).json({"code" : "Success"})
            } else {
                res.status(400).json({ "code": "INVALID_CREDENTIALS" });
            }
        } else {
            res.status(400).json({ "code": "USER_NOT_FOUND" });
        }

    } catch (e) {
        res.status(400).json({ "code": "NOT_FOUND" });
    }
});
