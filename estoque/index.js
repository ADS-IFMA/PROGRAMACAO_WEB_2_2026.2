import express from 'express'
const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Api Online'))

import produto from './routes/produto.js'
app.use('/produto', produto)

app.listen(3000, () => console.log('Servidor rodando...'))