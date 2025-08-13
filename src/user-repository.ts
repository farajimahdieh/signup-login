
import { User } from "./types/user-type";
import { v4 as uuidv4 } from 'uuid'
import bcrypt from "bcrypt"
import { UserCreation } from "./types/user-type";


export class UserRepository {

    users : User[] = []

    addUser = async(input : UserCreation) =>{
        

        if (this.findUserByUsername(input.username)|| this.findUserByEmail(input.email)){ 
            throw new Error ("User already exists!")

        }
        else{    
            const hashedPassword = await this.hashPassword(input.password)
            this.users.push({id : uuidv4(), username : input.username, password : hashedPassword, email : input.email })}

    }

    findUserByUsername = (username : string) => {

        return this.users.find(u => u.username === username)
    }

    findUserByEmail = (email : string) =>{

        return this.users.find(u => u.email === email)
    }

    matchUserWithPassword = async(username : string, password : string) =>{

        const user = this.users.find(u => u.username === username)
        if (user){
            const result = await this.verifyPassword(password, user.password)
            if(result){
                return true
            }
            else return false
        }
        else return false
    }

    hashPassword = async(password : any) => {
        
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword 
    }

    verifyPassword = async(password : string, hashedPassword : string) =>{

        const match = await bcrypt.compare(password, hashedPassword)

        return match 

    }
}
