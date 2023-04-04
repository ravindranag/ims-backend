import { verifyToken } from "../jose/jwt.js"

export const verifySeller = async (req, res, next) => {
	try {
		const token = req.headers.authorization
		if(!token) {
			return res.status(400).json('Invalid Token')
		}
		const payload = await verifyToken(token)
		if(payload.role !== 'Seller') {
			return res.status(403).json('You need to be a seller to access this resource')
		}
		req.locals = payload
		next()
	}
	catch(err) {
		return res.sendStatus(403)
	}
}