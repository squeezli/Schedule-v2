const { sequelize } = require('../utils/DB.utils.js')

const User = require('../models/users.models.js')
const UserInfo = require('../models/userInfo.models.js')
const Building = require('../models/buildings.models')
const Call = require('../models/calls.models')
const Classroom = require('../models/classrooms.models')
const Group = require('../models/groups.models')
const Role = require('../models/roles.models')
const Schedule = require('../models/schedules.models')
const Subject = require('../models/subjects.models')



exports.dbsync = async (req, res) => {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
        sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");
        res.send('successful')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}