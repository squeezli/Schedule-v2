const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')
const Schedule = require('./schedules.models.js')

const Group = sequelize.define('group', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Group.hasMany(Schedule)

module.exports = Group