
import { v4 as uuidv4, v4 } from 'uuid'
import bcrypt from "bcrypt"
import { UserCreation } from '../types/user-type';
import { Repository } from "typeorm";
import { Users } from '../entities/user-entity';
import { AppDataSource } from '../data-source';



export class UserRepository {

    repo : Repository<Users>

    constructor() {
    this.repo = AppDataSource.getRepository(Users);
    
  }
    addUser = async(input : UserCreation) =>{

        const hashedPassword = await this.hashPassword(input.password)
        const user = {email : input.email, username : input.username, password : hashedPassword, id :uuidv4()}
        return await this.repo.insert(user)
    }

    findUserByUsername = (username : string) => {

        return this.repo.findOne({ where: { username } })
    }

    findUserByEmail = (email : string) =>{

        return this.repo.findOne({ where: { email } })
    }

    matchUserWithPassword = async(username : string, password : string) =>{

        const user = await this.findUserByUsername(username)
        if (user){
            const result = await this.verifyPassword(password, user.password)
            if(result){
                return true
            }
            else return  new Error("unmatched pass and username")
        }
        else return new Error ("no such user!")
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
