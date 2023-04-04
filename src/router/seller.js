import { Router } from "express";
import { createNewSellerController, loginSellerController } from "../controller/seller.js";

const sellerRouter = Router()

sellerRouter.post('/create', createNewSellerController)
sellerRouter.post('/login', loginSellerController)

export default sellerRouter