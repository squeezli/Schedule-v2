import { DataTypes } from "sequelize"
import { sequelize } from "../utils/DB.utils.js"
import { Schedule } from "./schedules.models.js"

const Subject =  sequelize.define('subject', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
)

Subject.hasMany(Schedule)

export { Subject }