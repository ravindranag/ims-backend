import { Router } from "express";
import productRouter from "./product.js";
import adminRouter from "./admin.js";
import sellerRouter from "./seller.js";
import authRouter from "./auth.js";
import customerRouter from "./customer.js";

const appRoutes = Router()

appRoutes.get('/status', (req, res, next) => {
	res.json('OK')
})

appRoutes.use('/auth', authRouter)
appRoutes.use('/admin', adminRouter)
appRoutes.use('/product', productRouter)
appRoutes.use('/seller', sellerRouter)
appRoutes.use('/customer', customerRouter)

export default appRoutes