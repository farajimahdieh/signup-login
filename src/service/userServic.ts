import { userRepo } from "../dependancy";
import { encryptJWT } from "../utils/jwt-utility";
import { LoginUserInput } from "../types/user-type";

///how to handle loggin in with email


export class UserServie {


    loginUser = async(input: LoginUserInput) => { 

        const {username,password}= input

       const user = await userRepo.findUserByUsername(username)

        if (user) {
            if (await userRepo.matchUserWithPassword(username, password)) {
                const email = user.email;
                const token = encryptJWT({ username: username, email: email });
                return token}
            else{
                throw new Error("INVALID_CREDENTIALS")}
        }else{
            throw new Error("USER_NOT_FOUND")}
    }

    // signupUser = async(username : string, password : string, email : string) => {


    //     return await userRepo.addUser({ email, username, password })
    // }

}