import express, { json, urlencoded } from 'express'
import 'dotenv/config'
import appRoutes from './router/index.js'
import cors from 'cors'

const port = process.env.PORT || 8000

const whitelist = [
	'https://ims-vssut.web.app',
	'http://localhost:3000'
]

const app = express()

app.use(cors({
	origin: function(origin, callback) {
		// console.log('origin', origin)
		if (whitelist.indexOf(origin) !== -1 || origin === undefined) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}))

app.use(json())
app.use(urlencoded({
	extended: true
}))

app.use(appRoutes)

app.use((err, req, res, next) => {
	res.status(500).json(err.message || 'Internal Server Error')
})

app.listen(port, () => {
	console.log('[server] Listening on port', port)
})