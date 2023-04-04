import { generateToken } from "../lib/jose/jwt.js"
import prisma from "../lib/prisma/init.js"
import { createNewSeller } from "../repository/seller.js"

export const createNewSellerController = async (req, res, next) => {
	try {
		const data = req.body
		console.log(data)
		if(!await createNewSeller(data)) {
			return res.status(400).json('Cannot create seller')
		}
		return res.sendStatus(201)
	}
	catch(err) {
		next(err)
	}
}

export const loginSellerController =  async (req, res, next) => {
	try {
		const { email, password } = req.body
		const user = await prisma.user.findFirstOrThrow({
			where: {
				email: email
			},
			include: {
				seller: true
			}
		})
		if(user.password !== password) {
			throw Error('Wrong password')
		}
		const jwt = await generateToken({
			userId: user.id,
			role: 'Seller',
			seller: user.seller
		})
		return res.json(jwt)
	}
	catch(err) {
		next(err)
	}
}