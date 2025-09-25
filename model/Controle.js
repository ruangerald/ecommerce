const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Controle = db.define('controle', {
    codControle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('TV', 'AR', 'SOM', 'DATASHOW'),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'controles'
})

module.exports = Controle