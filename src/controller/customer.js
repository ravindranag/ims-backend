import { generateToken } from "../lib/jose/jwt.js"
import prisma from "../lib/prisma/init.js"
import { createCustomer, placeOrder } from "../repository/customer.js"

export const createNewCustomerController = async (req, res, next) => {
	try {
		const data = req.body
		console.log(data)
		if(!await createCustomer(data)) {
			return res.status(400).json('Cannot create account')
		}
		return res.sendStatus(201)
	}
	catch(err) {
		next(err)
	}
}

export const loginCustomerController =  async (req, res, next) => {
	try {
		const { email, password } = req.body
		const user = await prisma.user.findFirstOrThrow({
			where: {
				email: email
			},
			include: {
				customer: true
			}
		})
		if(user.password !== password) {
			throw Error('Wrong password')
		}
		const jwt = await generateToken({
			userId: user.id,
			role: 'Customer',
			customer: user.customer
		})
		return res.json(jwt)
	}
	catch(err) {
		next(err)
	}
}

export const placeOrderController = async (req, res, next) => {
	try {
		const data = req.body
		data['customerId'] = req.locals.customer.id
		const order = await placeOrder(data)
		res.json(order)
	}
	catch(err) {
		next(err)
	}
}