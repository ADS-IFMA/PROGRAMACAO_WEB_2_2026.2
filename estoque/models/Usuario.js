import banco from '../config/banco.js'

const Usuario = banco.sequelize.define('usuarios', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: banco.Sequelize.STRING(100)
    },
    password:{
        type: banco.Sequelize.STRING(250)
    },
    nome:{
        type: banco.Sequelize.STRING(100)
    },
    categoria:{
        type: banco.Sequelize.INTEGER
    }
})

export default Usuario