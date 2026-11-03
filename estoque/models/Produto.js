import banco from '../config/banco.js'

const Produto = banco.sequelize.define('produtos', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao:{
        type: banco.Sequelize.STRING(100)
    },
    preco:{
        type: banco.Sequelize.DECIMAL(20,2)
    },
    qtd:{
        type: banco.Sequelize.INTEGER
    }
})

export default Produto