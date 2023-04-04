import { Router } from "express";
import { verifySeller } from "../lib/utils/auth-helper.js";
import { addNewProductController, getAllProductController } from "../controller/product.js";

const productRouter = Router()

productRouter.get('/', getAllProductController)

export default productRouter