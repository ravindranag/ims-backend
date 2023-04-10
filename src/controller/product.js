import { addNewProduct, getAllProduct, getProductReport } from "../repository/product.js"

export const addNewProductController = async (req, res, next) => {
	try {
		const { seller } = req.locals
		const data = req.body
		const newProduct = await addNewProduct(seller.id, data)
		return res.sendStatus(201)
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

export const getProductReportController = async (req, res, next) => {
	try {
		const report = await getProductReport()
		return res.json({ report })
	} catch(err) {
		next(err)
	}
}