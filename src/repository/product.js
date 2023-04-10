import prisma from "../lib/prisma/init.js"

export const getAllProduct = async () => {
	try {
		const allProducts = await prisma.product.findMany()
		return allProducts
	}
	catch(err) {
		return null
	}
}

export const addNewProduct = async (sellerId, productDetails) => {
	try {
		if(productDetails.name.length <= 0) throw Error('Product name is required')
		if(productDetails.quantity <= 0) throw Error('Quantity should not be <= 0')
		if(productDetails.price <= 0) throw Error('Price should not be <= 0')
		const newProduct = await prisma.product.create({
			data: {
				...productDetails,
				sellerId: sellerId
			}
		})
		return newProduct
	}
	catch(err) {
		throw err
	}
}

export const getProductReport = async () => {
	try {
		const report = await prisma.product.findMany({
			select: {
				_count: {
					select: {
						orderedBy: true
					}
				},
				id: true,
				name: true,
				price: true,
				quantity: true,
				soldBy: true
			}
		})
		return report
	} catch(err) {
		throw err
	}
}