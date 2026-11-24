import modelos from '../models/relacionamentos.js'
import Usuario from '../models/Usuario.js'

modelos.Produto.sync()
modelos.Venda.sync()
modelos.Usuario.sync()