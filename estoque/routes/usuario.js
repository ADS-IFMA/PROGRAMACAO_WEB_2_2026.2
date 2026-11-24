import express from 'express'
const router = express.Router()
import UsuarioController from '../controllers/UsuarioController.js'
import auth from '../helpers/auth.js'

router.post('/salvar', UsuarioController.salvar)
router.get('/:id', auth, UsuarioController.get)
router.post('/login', UsuarioController.login)

export default router