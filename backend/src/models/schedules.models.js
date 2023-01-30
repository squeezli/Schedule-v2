import { DataTypes } from "sequelize"
const sequelize = await import("../utils/DB.utils.js")

const Schedule = sequelize.define('schedule', {
    date: {
        type: DataTypes.DATE,
    }
})

export { Schedule }