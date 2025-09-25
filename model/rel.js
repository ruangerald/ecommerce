const Cliente = require('../model/Cliente')
const Estoque = require('../model/Estoque')
const Controle = require('../model/Controle')

Cliente.hasMany(Estoque,{
    foreignKey: 'idCliente',
    as: 'estoqueCliente',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Cliente,{
    foreignKey:'idCliente',
    as: 'clienteEstoque',
    allowNull: false
})

Controle.hasMany(Estoque,{
    foreignKey: 'idControle',
    as: 'estoqueControle',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Controle,{
    foreignKey:'idControle',
    as: 'controleEstoque',
    allowNull: false
})

module.exports = {Cliente, Estoque, Controle}