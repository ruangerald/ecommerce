const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost' // 127.0.0.1

const conn = require('./db/conn')

const authMiddleware = require('./middleware/auth.middleware')
const authController = require('./controller/auth.controller')

const clienteController = require('./controller/cliente.controller')
const controleController = require('./controller/controle.controller')

//--------Middleware express -------------------------
app.use(express.urlencoded({extended:true}))
app.use(express())
app.use(cors())
//----------------------------------------------------

//--------Rotas Publicas -----------------------------
app.post('/cliente', clienteController.cadastrar)
app.post('/login', authController.login)

app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação rodando!'})
})

// -------Rotas Privadas ----------------------------
app.use(authMiddleware)

app.post("/controle", controleController.cadastrar)

conn.sync()
.then(()=>{
    app.listen(PORT,hostname),()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    }
})
.catch((err)=>{
    console.error('Erro ao conectar com o banco de dados', err)
})

