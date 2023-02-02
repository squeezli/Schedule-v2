const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')
const Classroom = require("./classrooms.models.js")

const Building = sequelize.define('building', {
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
    shortName: {
        type: DataTypes.STRING,
    },
},
)


Building.hasMany(Classroom)

module.exports = Building