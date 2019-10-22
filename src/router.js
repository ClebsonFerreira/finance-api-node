const express = require('express')
const listController = require('./controller/listController')

const routes = express.Router()

//rotas financeiro
routes.get('/',listController.index)
routes.get('/:id',listController.getId)
routes.post('/',listController.create)
routes.put('/:id',listController.edit)
routes.delete('/:id',listController.delete)

module.exports = routes