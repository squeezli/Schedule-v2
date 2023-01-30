const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
// import { Building } from '../models/buildings.models.js'
// // import { User } from '../models/users.js'
// import { Subject } from '../models/subjects.models.js'
// import { UserInfo } from '../models/userInfo.models.js'
// import { Call } from '../models/calls.models.js'
// import { Classroom } from '../models/classrooms.models.js'
// // import { Role } from '../models/role.js'
// import { Schedule } from '../models/schedules.models.js'
// import { Group } from '../models/groups.models.js'

// import * as model from '../models/models.js'

dotenv.config()

//Connect to database
const sequelize = new Sequelize({
    database: process.env.DB_CONNECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
})


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize