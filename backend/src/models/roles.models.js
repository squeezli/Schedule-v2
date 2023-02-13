const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')

const Role =  sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,

        allowNull: false,
    },
})



module.exports = Role