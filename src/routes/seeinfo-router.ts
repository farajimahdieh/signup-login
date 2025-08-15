import { Router } from "express";
import { JWTmiddleware } from "../middlewares/jwt-middleware";

export const router = Router()

router.get("/", JWTmiddleware, (req, res) => {

    res.send("mHDIEH?")
})