import Produto from '../models/Produto.js'

class ProdutoController{

    salvar = async (req, res) => {
        const dados = req.body
        await Produto.create(dados)
        return res.status(201)
            .json({message: 'Produto cadastrado com sucesso!'})
    }
    
    listar = async (req, res) => {
        try{
            const produtos = await Produto.findAll();
            return res.status(200).json(produtos);
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    editar = async (req, res) => {
        try{
            const id = req.params.id
            const dados = req.body
            const produto = await Produto.findByPk(id);
            if(!produto) 
                return res.status(404).json({message: 'Produto não encontrado!'})
            await produto.update(dados)
            return res.status(201).json({message: 'Produto editado com sucesso!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    excluir = async (req, res) => {
        try{
            const id = req.params.id
            const produto = await Produto.findByPk(id)
            if(!produto)
                return res.status(404).json({message: 'Produto não encontrado!'})
            await produto.destroy()
            return res.status(200).json({message: 'Produto excluído com sucesso!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

}

export default new ProdutoController()