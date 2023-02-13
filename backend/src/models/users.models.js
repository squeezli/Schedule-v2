const { DataTypes } = require( 'sequelize')
const { sequelize }  = require ('../utils/DB.utils.js')
const Role = require('./roles.models.js')
// const Schedule   = require ('./schedules.models.js')
const UserInfo = require('./userInfo.models.js')

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

User.hasOne(UserInfo,{
    onDelete:'CASCADE'
})

User.belongsToMany(Role, {through: 'userRoles'})
Role.belongsToMany(User, {through: 'userRoles'})

module.exports = User