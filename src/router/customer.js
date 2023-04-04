import { Router } from "express";
import { createNewCustomerController, loginCustomerController, placeOrderController } from "../controller/customer.js";
import { verifyCustomer } from "../lib/utils/auth-helper.js";

const customerRouter = Router()

customerRouter.post('/create', createNewCustomerController)
customerRouter.post('/login', loginCustomerController)
customerRouter.post('/order', verifyCustomer, placeOrderController)

export default customerRouter