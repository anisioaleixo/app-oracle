const { Router } = require('express')
const { api } = require('../controller/APIController')
const routes = Router()

routes.use('/', api)

module.exports = routes