import { Router } from "express";
import { createNewSellerController, loginSellerController } from "../controller/seller.js";
import { verifySeller } from "../lib/utils/auth-helper.js";
import { addNewProductController } from "../controller/product.js";

const sellerRouter = Router()

sellerRouter.post('/create', createNewSellerController)
sellerRouter.post('/login', loginSellerController)
sellerRouter.post('/product', verifySeller, addNewProductController)

export default sellerRouter