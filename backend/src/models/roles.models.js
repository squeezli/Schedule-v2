import { DataTypes } from "sequelize"
import { sequelize } from "../utils/DB.js"

const Role =  sequelize.define('role', {
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
})

export { Role }