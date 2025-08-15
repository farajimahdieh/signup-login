import { Request, Response, NextFunction } from "express"

export const JWTmiddleware = (req : Request, res : Response, next : NextFunction) =>{


    console.log(req.headers)
    next()
}