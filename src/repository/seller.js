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
		// console.log(err)
		return false
	}
}