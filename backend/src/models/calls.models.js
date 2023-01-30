import { DataTypes } from "sequelize"
import { sequelize } from "../utils/DB.utils.js"

const Call =  sequelize.define('call',{
    date:{
        type:DataTypes.DATE, 
    },
    time:{
        type:DataTypes.STRING,
    }
},
)

export { Call }