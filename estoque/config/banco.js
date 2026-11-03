import Sequelize from 'sequelize'
import mariadb from 'mariadb'

try{
    const conexao = await mariadb.createConnection(
        {host: 'localhost', user: 'root', password: ''}
    )
    await conexao.query(
        'CREATE DATABASE IF NOT EXISTS estoque')
    await conexao.end()
    console.log('Banco criado com sucesso!')
}catch(erro){
    console.log('Erro: '+erro)
}

const sequelize = new Sequelize('estoque', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
})

sequelize.authenticate().then(
    () => console.log('Banco de dados conectado com sucesso"')
).catch(
    (erro) => console.log('ERRO: '+erro)
)

export default {Sequelize, sequelize}