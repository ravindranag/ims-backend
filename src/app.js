import express from 'express'
import 'dotenv/config'

const port = process.env.PORT || 8000

const app = express()

app.use('/', (req, res, next) => {
	res.json('Server Running')
})

app.listen(port, () => {
	console.log('[server] Listening on port', port)
})