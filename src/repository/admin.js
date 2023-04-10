import { generateToken } from "../lib/jose/jwt.js"
import prisma from "../lib/prisma/init.js"

export const createNewAdmin = async (data) => {
	try {
		const user = await prisma.user.create({
			data: {
				email: data.email,
				password: data.password
			}
		})
		const admin = await prisma.admin.create({
			data: {
				name: data.name,
				userId: user.id
			}
		})
		return true
	}
	catch(err) {
		// console.log(err)
		return false
	}
}

export const loginAdmin = async (email, password) => {
	try {
		const user = await prisma.user.findFirstOrThrow({
			where: {
				email: email
			},
			include: {
				admin: true
			}
		})
		if(user.password !== password) {
			throw Error('Wrong password')
		}
		const jwt = await generateToken({
			userId: user.id,
			role: 'Admin',
			admin: user.admin
		})
		return jwt
	} catch(err) {
		throw err
	}
}