import express from 'express'
const router = express.Router()
import ProdutoController from '../controllers/ProdutoController.js'

router.post('/', ProdutoController.salvar)
router.get('/', ProdutoController.listar)
router.put('/:id', ProdutoController.editar)
router.delete('/:id', ProdutoController.excluir)

export default router