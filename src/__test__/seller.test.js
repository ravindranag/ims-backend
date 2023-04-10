import app from "../app.js";
import request from 'supertest'

const sellerDetails = [
	{
		email: 'appario@gmail.com',
		name: 'Appario',
		password: 'appario'
	},
	{
		email: 'abc@gmail.com',
		name: '',
		password: ''
	},
	{
		email: 'appario1@gmail.com',
		name: 'Appario2',
		password: 'appario'
	}
]

describe('Seller Management Test', () => {
	it('POST /seller/create (already exists) -> Seller already exists', async () => {
		const res = await request(app)
			.post('/seller/create')
			.send(sellerDetails[0])
		expect(res.statusCode).toBe(400)
		expect(res.body).toEqual('Seller already exists')
	})
	it('POST /seller/create (new seller) -> Created', async () => {
		const res = await request(app)
			.post('/seller/create')
			.send(sellerDetails[2])
		expect(res.statusCode).toBe(201)
		expect(res.text).toEqual('Created')
	})
})