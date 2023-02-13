const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')
const Schedule = require('./schedules.models.js')

const Classroom = sequelize.define('classroom', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    numberClassroom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
)

// Classroom.hasMany(Schedule)

module.exports = Classroom