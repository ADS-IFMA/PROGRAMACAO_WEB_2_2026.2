import Sequelize from 'sequelize'
import mariadb from 'mariadb'
import 'dotenv/config'

const db_host = process.env.DB_HOST
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME

try{
    const conexao = await mariadb.createConnection(
        {host: db_host, user: db_user, password: db_password}
    )
    await conexao.query(
        'CREATE DATABASE IF NOT EXISTS estoque')
    await conexao.end()
    console.log('Banco criado com sucesso!')
}catch(erro){
    console.log('Erro: '+erro)
}

const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: 'mariadb'
})

sequelize.authenticate().then(
    () => console.log('Banco de dados conectado com sucesso"')
).catch(
    (erro) => console.log('ERRO: '+erro)
)

export default {Sequelize, sequelize}