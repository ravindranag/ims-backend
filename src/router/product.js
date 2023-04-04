import { Router } from "express";
import { verifySeller } from "../lib/utils/auth-helper.js";
import { addNewProductController } from "../controller/product.js";

const productRouter = Router()

productRouter.get('/')

export default productRouter