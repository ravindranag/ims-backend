import { Router } from "express";
import { verifyTokenController } from "../controller/auth.js";

const authRouter = Router()

authRouter.get('/verify', verifyTokenController)

export default authRouter