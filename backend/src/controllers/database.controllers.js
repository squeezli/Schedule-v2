const { sequelize } = require('../utils/DB.utils.js')
const bcrypt = require('bcrypt')

const User = require('../models/users.models.js')
const UserInfo = require('../models/userInfo.models.js')
const Building = require('../models/buildings.models')
const Call = require('../models/calls.models')
const Classroom = require('../models/classrooms.models')
const Group = require('../models/groups.models')
const Role = require('../models/roles.models')
const Schedule = require('../models/schedules.models')
const Subject = require('../models/subjects.models')

exports.dbSync = async (req, res) => {
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

exports.dbSeed = async (req, res) => {
    console.log()
    try {
        // await User.destroy({
        //     truncate: true
        // });

        // await Role.destroy({
        //     truncate: true
        // });
        // await Building.destroy({
        //     truncate: true
        // });
        // await Subject.destroy({
        //     truncate: true
        // });
        // await Classroom.destroy({
        //     truncate: true
        // });
        // await Call.destroy({
        //     truncate: true
        // });
        // await Group.destroy({
        //     truncate: true
        // });

        hashPassword = await bcrypt.hash('admin', 10)

        await User.create({
            login: 'admin', password: hashPassword
        })

        await Role.bulkCreate([
            { name: 'admin' },
            { name: 'teacher' },
            { name: 'student' },
        ])

        // userRoles

        await Building.bulkCreate([
            { name: 'Главный', shortname: 'Гл' },
            { name: 'Музыкальный', shortname: 'Муз' },
            { name: 'СОК', shortname: 'СОК' },
        ])

        await Subject.bulkCreate([
            { name: 'Систематизация' },
            { name: 'Базы данных' },
            { name: 'Физ-ра'},
            { name: 'Черчение'},
        ])

        await Classroom.bulkCreate([
            { numberClassroom: '1', buildingId: '1' },
            { numberClassroom: '2', buildingId: '1' },
            { numberClassroom: '3', buildingId: '1' },
            { numberClassroom: '4', buildingId: '1' },
            { numberClassroom: '5', buildingId: '1' },
            { numberClassroom: '6', buildingId: '1' },
            { numberClassroom: '7', buildingId: '1' },
            { numberClassroom: '8', buildingId: '1' },
            { numberClassroom: '9', buildingId: '1' },
            { numberClassroom: '10', buildingId: '1' },
            { numberClassroom: '1', buildingId: '2' },
            { numberClassroom: '2', buildingId: '2' },
            { numberClassroom: '3', buildingId: '2' },
            { numberClassroom: '4', buildingId: '2' },
            { numberClassroom: '5', buildingId: '2' },
            { numberClassroom: '6', buildingId: '2' },
            { numberClassroom: '7', buildingId: '2' },
            { numberClassroom: '8', buildingId: '2' },
            { numberClassroom: '9', buildingId: '2' },
            { numberClassroom: '10', buildingId: '2' },
            { numberClassroom: '1', buildingId: '3' },
            { numberClassroom: '1', buildingId: '3' },
        ])

        await Call.bulkCreate([
            {
                date: null,
                lesson1: '8:00-8:45',
                lesson2: '8:55-9:40',
                lesson3: '9:55-10:40',
                lesson4: '11:00-11:45',
                lesson5: '12:05-12:50',
                lesson6: '13:00-13:45',
                lesson7: '13:55-14:40',
                lesson8: '14:50-15:35',
                lesson9: '15:45-16:30',
                lesson10: '16:40-17:25',
                lesson11: '17:35-18:20',
                lesson12: '18:30-19:15'
            },
        ])

        await Group.bulkCreate([
            { name: '493' },
            { name: '492' },
            { name: '491' },
            { name: '490' },
        ])

        return res.status(201).json({ message: 'Seed is completed' })

    } catch (error) {
        return res.json({ message: error })
    }
}