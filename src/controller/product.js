import { addNewProduct, getAllProduct } from "../repository/product.js"

export const addNewProductController = async (req, res, next) => {
	try {
		const { seller } = req.locals
		const data = req.body
		const newProduct = await addNewProduct(seller.id, data)
		return res.json(newProduct)
	}
	catch(err) {
		next(err)
	}
}

export const getAllProductController = async (req, res, next) => {
	try {
		const allProducts = await getAllProduct()
		res.json(allProducts)
	}
	catch(err) {
		next(err)
	}
}