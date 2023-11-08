const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodosOsNiveis)
router.get('/niveis/:id', NivelController.pegarUmNivel)
router.post('/niveis', NivelController.criaNivel)
router.put('/niveis/:id', NivelController.editarNivel)
router.delete('/niveis/:id', NivelController.deletarNivel)

module.exports = router