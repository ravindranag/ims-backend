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