import { Router } from "express";
import productRouter from "./product.js";
import adminRouter from "./admin.js";

const appRoutes = Router()

appRoutes.use('/admin', adminRouter)
appRoutes.use('/product', productRouter)

export default appRoutes