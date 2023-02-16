const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

//Connect to database
module.exports.sequelize = new Sequelize({
    database: process.env.DB_CONNECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
})
