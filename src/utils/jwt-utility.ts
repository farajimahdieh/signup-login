import jwt from "jsonwebtoken"
import dotenv from "dotenv-flow"
import { UserWithoutPassword } from "../types/user-type"
import { log } from "console"
dotenv.config()

const SECRET_KEY  = process.env.jwt_secret_key?.trim()

if (!SECRET_KEY) {
  throw new Error("secret key is missing");

}

export const encryptJWT = (user : UserWithoutPassword) =>{

        const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" })
        return token
}

export const decryptJWT = (token: string) => {
  const payload = jwt.verify(token, SECRET_KEY) as UserWithoutPassword ;

  return payload
}