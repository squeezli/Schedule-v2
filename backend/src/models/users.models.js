const { DataTypes } = require( 'sequelize')
const { sequelize }  = require ('../utils/DB.utils.js')
const Schedule   = require ('./schedules.models.js')

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
},)

User.hasMany(Schedule)

module.exports = User