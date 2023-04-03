import express, { json, urlencoded } from 'express'
import 'dotenv/config'
import appRoutes from './router/index.js'

const port = process.env.PORT || 8000

const app = express()
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