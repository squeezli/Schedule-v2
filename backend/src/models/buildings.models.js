import { DataTypes } from "sequelize"
import { sequelize } from "../utils/DB.utils.js"
import { Classroom } from "./classrooms.models.js"

const Building =  sequelize.define('building', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortName: {
        type: DataTypes.STRING,
    },
},
)


Building.hasMany(Classroom)

export { Building, }