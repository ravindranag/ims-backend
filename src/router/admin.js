import { Router } from "express";
import { createNewAdminController, loginAdminController } from "../controller/admin.js";

const adminRouter = Router()

adminRouter.post('/create', createNewAdminController)
adminRouter.post('/login', loginAdminController)

export default adminRouter