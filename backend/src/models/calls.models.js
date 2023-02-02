const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/DB.utils.js')

const Call =  sequelize.define('call',{
    date:{
        type:DataTypes.DATE, 
    },
    lesson1:{
        type:DataTypes.STRING,
    },
    lesson2:{
        type:DataTypes.STRING,
    },
    lesson3:{
        type:DataTypes.STRING,
    },
    lesson4:{
        type:DataTypes.STRING,
    },
    lesson5:{
        type:DataTypes.STRING,
    },
    lesson6:{
        type:DataTypes.STRING,
    },
    lesson7:{
        type:DataTypes.STRING,
    },
    lesson8:{
        type:DataTypes.STRING,
    },
    lesson9:{
        type:DataTypes.STRING,
    },
    lesson10:{
        type:DataTypes.STRING,
    },
    lesson11:{
        type:DataTypes.STRING,
    },
    lesson12:{
        type:DataTypes.STRING,
    },
},
)

module.exports = Call