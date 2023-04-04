import prisma from "../lib/prisma/init.js"

export const createCustomer = async (data) => {
	try {
		await prisma.user.create({
			data: {
				email: data.email,
				password: data.password,
				customer: {
					create: {
						name:data.name,
						address: data.address
					}
				}
			}
		})
		return true
	}
	catch(err) {
		throw Error('Something went wrong')
	}
}

export const placeOrder = async (data) => {
	try {
		const newOrder = await prisma.productOrder.create({
			data: {
				customerId: data.customerId,
				productId: data.productId,
				quantity: data.quantity,
				amount: data.amount
			},
			include: {
				customer: true,
				product: true
			}
		})
		await prisma.product.update({
			where: {
				id: data.productId
			},
			data: {
				quantity: {
					decrement: data.quantity
				}
			}
		})
		return newOrder
	}
	catch(err) {
		throw err
	}
}	