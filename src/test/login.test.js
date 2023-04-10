import app from '../app.js'
import request from 'supertest'

describe('Login Test', () => {
	it('should return OK', async () => {
		const res = await request(app)
			.get('/status')
		expect(res.statusCode).toEqual(200)
		expect(res.body).toEqual('OK')
	})
})