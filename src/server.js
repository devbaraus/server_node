// importa pacote express
const express = require('express')
// importa pacote cors
const cors = require('cors')
// importa pacote morgan
const morgan = require('morgan')
// importa rotas pelo arquivo routes.js
const routes = require('./routes')

// atribui a variavel o express como uma função
const app = express()

// app usa corpo em json
app.use(express.json())
// app usa cors
app.use(cors())
// app usa gerador de log morgan
app.use(morgan('dev'))

// utilize o arquivo de rotas
app.use('/', routes)

// inicia servidor escutando requisições na porta 3000
app.listen(3000, () => {
  console.warn(`Servidor inicializador na porta 3000`)
})
