const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')
const Building = require('./buildings.models.js')
const Call = require('./calls.models.js')
const Classroom = require('./classrooms.models.js')
const Group = require('./groups.models.js')
const Subject = require('./subjects.models.js')
const User = require('./users.models.js')

const Schedule = sequelize.define("schedule", {
    date: {
        type: DataTypes.DATEONLY,
    },
    lesson:{
        type:DataTypes.INTEGER,
    }
})

// Schedule.belongsTo(Call)
// Call.hasMany(Schedule)

// Schedule.belongsTo(Building)
// Building.hasOne(Schedule)

Schedule.belongsTo(User)
User.hasOne(Schedule)

Schedule.belongsTo(Group)
Group.hasOne(Schedule)

Schedule.belongsTo(Subject)
Subject.hasOne(Schedule)

Schedule.belongsTo(Classroom)
Classroom.hasOne(Schedule)

module.exports = Schedule