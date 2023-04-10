import app from '../app.js'
import request from 'supertest'
// import { loginAdmin } from '../repository/admin.js'

describe('Login Test', () => {
	it('POST /admin/login with valid credentials', async () => {
		const res = await request(app)
			.post('/admin/login')
			.send({
				email: 'admin@gmail.com',
				password: 'admin'
			})
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatch(/.*/)
	})
	it('POST /admin/login with invalid password', async () => {
		const res = await request(app)
			.post('/admin/login')
			.send({
				email: 'admin@gmail.com',
				password: 'adminaaa'
			})
		expect(res.statusCode).toBe(400)
	})
	// it('POST /admin/login with invalid email', async () => {
	// 	request(app)
	// 		.post('/admin/login')
	// 		.send({
	// 			email: 'adminaa@gmail.com',
	// 			password: 'admina'
	// 		})
	// 		.expect(400)
	// 		.end((err, res) => {
	// 			expect(res.body).toEqual('No User found')
	// 		})
	// })
})
