import prisma from "../lib/prisma/init.js"

export const createNewSeller = async (data) => {
	try {
		const user = await prisma.user.create({
			data: {
				email: data.email,
				password: data.password,
				seller: {
					create: {
						name: data.name
					}
				}
			}
		})
		return true
	}
	catch(err) {
		throw err
	}
}

export const sellerExists = async (email) => {
	try {
		const count = await prisma.user.count({
			where: {
				email: email
			}
		})
		return count > 0 ? true : false
	} catch(err) {
		throw err
	}
}

export const deleteSeller = async (email) => {
	try {
		await prisma.user.delete({
			where: {
				email: email
			}
		})
	} catch(err) {
		throw err
	}
}