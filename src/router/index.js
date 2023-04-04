import { Router } from "express";
import productRouter from "./product.js";
import adminRouter from "./admin.js";
import sellerRouter from "./seller.js";
import authRouter from "./auth.js";

const appRoutes = Router()

appRoutes.use('/auth', authRouter)
appRoutes.use('/admin', adminRouter)
appRoutes.use('/product', productRouter)
appRoutes.use('/seller', sellerRouter)

export default appRoutes