import { generateToken } from "../lib/jose/jwt.js"
import prisma from "../lib/prisma/init.js"
import { createNewAdmin, loginAdmin } from "../repository/admin.js"

export const createNewAdminController = async (req, res, next) => {
	try {
		const data = req.body
		console.log(data)
		if(!await createNewAdmin(data)) {
			return res.status(400).json('Cannot create admin')
		}
		return res.sendStatus(201)
	}
	catch(err) {
		next(err)
	}
}

export const loginAdminController =  async (req, res, next) => {
	try {
		const { email, password } = req.body
		const jwt = await loginAdmin(email, password)
		res.json(jwt)
	}
	catch(err) {
		next(err)
	}
}