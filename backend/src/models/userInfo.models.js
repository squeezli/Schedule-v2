import { DataTypes } from 'sequelize'
import { sequelize } from '../utils/DB.utils.js'
// import { User } from './users'

const UserInfo =  sequelize.define('userInfo', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },

})

// UserInfo.hasOne(User)

export { UserInfo }