import { DataTypes } from 'sequelize'
import { sequelize } from '../utils/DB.js'
import { Schedule } from './schedules.js'

const User =  sequelize.define("user", {
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

export { User }