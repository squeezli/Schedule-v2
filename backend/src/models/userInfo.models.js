const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')
const  User  = require('../models/users.models')

const UserInfo = sequelize.define('userInfo', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },

})

UserInfo.hasOne(User)

module.exports = UserInfo