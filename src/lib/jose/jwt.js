import * as jose from 'jose'

const secret = new TextEncoder().encode(
	'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)
const alg = 'HS256'


export const generateToken = async (payload) => {  
	const jwt = await new jose.SignJWT(payload)
	.setProtectedHeader({ alg })
	.setIssuedAt()
	.setExpirationTime('30d')
	.sign(secret)

	return jwt
}

export const verifyToken = async (token) => {
	try {
		const { payload, protectedHeader } = await jose.jwtVerify(token, secret)
		return payload
	}
	catch(err) {
		throw Error('Invalid token')
	}
}