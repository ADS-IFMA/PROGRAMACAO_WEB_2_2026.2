import banco from '../config/banco.js'

const Venda = banco.sequelize.define('vendas', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data:{
        type: banco.Sequelize.DATE
    },
    total:{
        type: banco.Sequelize.DECIMAL(20,2)
    },
    qtd:{
        type: banco.Sequelize.INTEGER
    }
})

export default Venda