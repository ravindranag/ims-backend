import { Router } from "express";
import { verifySeller } from "../lib/utils/auth-helper.js";
import { addNewProductController, getAllProductController, getProductReportController } from "../controller/product.js";

const productRouter = Router()

productRouter.get('/', getAllProductController)
productRouter.get('/report', getProductReportController)

export default productRouter