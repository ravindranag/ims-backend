import app from '../app.js'
import request from 'supertest'

describe('Product Report', () => {
	it('GET /product/report -> Should return report', async () => {
		const res = await request(app)
			.get('/product/report')
		expect(res.statusCode).toBe(200)
		expect(res.body).toHaveProperty('report')
	})
})