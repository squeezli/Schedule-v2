import { DataTypes } from 'sequelize'
import { sequelize } from '../utils/DB.utils.js'
import { Schedule } from './schedules.models.js'

const Group =  sequelize.define('group', {
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

export { Group }