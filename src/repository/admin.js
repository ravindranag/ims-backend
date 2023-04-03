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