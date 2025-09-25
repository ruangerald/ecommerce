const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('db_ecom', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()

.then(()=>{
    console.log('Banco de dados Conectado com sucesso')
})
.catch((err)=>{
    console.error('Erro ao conectar com Banco de dados!!')
})

module.exports = sequelize