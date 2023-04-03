import { createNewSellerController, loginSellerController } from "../controller/seller.js";

const { Router } = require("express");

const sellerRouter = Router()

sellerRouter.post('/create', createNewSellerController)
sellerRouter.post('/login', loginSellerController)

export default sellerRouter