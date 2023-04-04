import { verifyToken } from "../lib/jose/jwt.js"

export const verifyTokenController = async (req, res, next) => {
	try {
		const token = req.headers.authorization
		if(!token) throw Error('Invalid token')
		const payload = await verifyToken(token)
		res.json(payload)
	}
	catch(err) {
		next(err)
	}
}