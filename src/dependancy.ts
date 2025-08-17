import { UserRepository } from "./db/user-repository" 
import { UserServie } from "./service/userServic"

export const userRepo = new UserRepository()

export const userService = new UserServie()