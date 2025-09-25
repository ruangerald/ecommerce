const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Estoque = db.define('estoque', {
    codEstoque: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCliente: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        references: {
            key: 'codCliente',
            model:  'clientes'

        }
    },
    idControle: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        references: {
            key: 'codControle',
            model:  'controles'

        }
    },
    data: {
        type: DataTypes.DATEONLY(), // somente a data
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
        allowNull: false
    },
    qtdeMovimento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qtdeMinimo: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'estoques'
})

module.exports = Estoque