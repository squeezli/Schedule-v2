const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')

const Schedule = sequelize.define("schedule", {
    date: {
        type: DataTypes.DATE,
    }
})

module.exports = Schedule