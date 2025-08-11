import { error } from "console";
import { User } from "./user-type";
 import { v4 as uuidv4 } from 'uuid'

interface UserWithId extends User {
    id : string 
}
export class UserRepository {

    users : UserWithId[] = []

    addUser = (input : User) =>{
        

        if (this.findUserByUsername(input.username)|| this.findUserByEmail(input.email)){ 
            throw new Error ("User already exists!")

        }
        else{    
            this.users.push({id : uuidv4(), ...input})}

    }

    findUserByUsername = (username : string) => {

        return this.users.find(u => u.username === username)
    }

    findUserByEmail = (email : string) =>{

        return this.users.find(u => u.email === email)
    }
}
