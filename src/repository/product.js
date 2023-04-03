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