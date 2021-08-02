const express = require('express')
const routes = require('./src/routes')
require('dotenv').config()
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(routes)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))