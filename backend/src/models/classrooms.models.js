import { DataTypes } from "sequelize"
import { sequelize } from "../utils/DB.utils.js"
import { Schedule } from "./schedules.models.js"

const Classroom =  sequelize.define('classroom', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    numberClassroom:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
)

Classroom.hasMany(Schedule)

export {Classroom}