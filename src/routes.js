const router = require('express').Router()
const FactsController = require('./controllers/FactsController')

const factsController = new FactsController()

// Retorna todos fatos
router.get('/', factsController.index)

// Retorna um fato
router.get('/:id', factsController.show)

// Cria um novo fato
router.post('/', factsController.create)

// Edita um fato
router.put('/:id', factsController.update)

// Deleta um fato
router.delete('/:id', factsController.delete)

module.exports = router
