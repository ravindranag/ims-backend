import app from "../app.js";
import request from 'supertest'

let invalidSellerToken = 'token'
let validSellerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjbGdhemdldXgwMDA0ZHB6MHB5OGtlNXY5Iiwicm9sZSI6IlNlbGxlciIsInNlbGxlciI6eyJpZCI6ImNsZ2F6Z2V1eDAwMDVkcHoweHhoZTB2bm4iLCJuYW1lIjoiQXBwYXJpbyIsInVzZXJJZCI6ImNsZ2F6Z2V1eDAwMDRkcHowcHk4a2U1djkifSwiaWF0IjoxNjgxMTQwMTk1LCJleHAiOjE2ODM3MzIxOTV9.cI7yksmb2QTu1zgOV3w6vKT29lCyIA5nGjd4cEfwkcA'
let productDetails = [
	{
		name: '',
		quantity: 0,
		price: 0.0
	},
	{
		name: 'Camera',
		quantity: 0,
		price: 0.0
	},
	{
		name: 'Camera',
		quantity: 5,
		price: 0.0
	},
	{
		name: 'Camera',
		quantity: 5,
		price: 550.0
	}
]


describe('Add product', () => {
	it('POST /seller/product with invalid credentials', async () => {
		const res = await request(app)
			.post('/seller/product')
			.set('Authorization', invalidSellerToken)
			.send(productDetails[0])
		expect(res.statusCode).toBe(403)
		expect(res.text).toEqual('Forbidden')
	})
	it('POST /seller/product with valid credentials, invalid product name', async () => {
		const res = await request(app)
			.post('/seller/product')
			.set('Authorization', validSellerToken)
			.send(productDetails[0])
		expect()
	})
	// it('POST /seller/product with valid credentials, quantity <= 0', async () => {
	// 	const res = await request(app)
	// 		.post('/seller/product')
	// 		.set('Authorization', validSellerToken)
	// 		.send(productDetails[1])
	// })
	// it('POST /seller/product with valid credentials, price <= 0', async () => {
	// 	const res = await request(app)
	// 		.post('/seller/product')
	// 		.set('Authorization', validSellerToken)
	// 		.send(productDetails[2])
	// })
	// it('POST /seller/product with valid credentials, valid product details', async () => {
	// 	const res = await request(app)
	// 		.post('/seller/product')
	// 		.set('Authorization', validSellerToken)
	// 		.send(productDetails[3])
	// })
})