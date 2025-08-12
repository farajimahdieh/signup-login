
import { User } from "./user-type";
import { v4 as uuidv4 } from 'uuid'


type UserCreation = Omit<User, "id">

export class UserRepository {

    users : User[] = []

    addUser = (input : UserCreation) =>{
        

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

    matchUserWithPassword = (username : string, password : string) =>{

        const user = this.users.find(u => u.username === username)
        if (user){
            if(user.password === password){
                return true
            }
            else return false
        }
        else return false
    }
}
