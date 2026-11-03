import express from 'express'
import 'dotenv/config'
const app = express()
const PORTA = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => res.send('Api Online'))

import produto from './routes/produto.js'
app.use('/produto', produto)

app.listen(PORTA, () => console.log('Servidor rodando...'))