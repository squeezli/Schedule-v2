const { Op } = require("sequelize");
const Schedule = require('../models/schedules.models.js')
const User = require('../models/users.models.js')
const { sequelize } = require('../utils/DB.utils.js')

exports.showByUser = async (req, res) => {
    try {

        const id = req.params.id
        const { startDate, endDate } = req.body

        const shedules = await Schedule.findAll({
            where: {
                userId: id,
                date: { [Op.between]: [startDate, endDate] },
            }
        })

        return res.status(200).json(shedules)

    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.showByGroup = async (req, res) => {
    try {

        const id = req.params.id
        const { startDate, endDate } = req.body

        const shedules = await Schedule.findAll({
            where: {
                groupId: id,
                date: { [Op.between]: [startDate, endDate] },
            }
        })

        return res.status(200).json(shedules)

    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.create = async (req, res) => {
    try {

        const { days } = req.body
        let schedules = []

        days.forEach(lessons => {
            lessons.lessons.forEach(lesson => {
                schedules.push({
                    userId: lesson.userId,
                    groupId: lesson.groupId,
                    date: lesson.date,
                    lesson: lesson.lesson,
                    subjectId: lesson.subjectId,
                    classroomId: lesson.classroomId,
                })
            })
        })

        const schedule = await Schedule.bulkCreate(schedules)

        return res.status(200).json({ message: `Расписание добавлено` })

    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова.` })
    }
}

exports.updateDay = async (req, res) => {
    try {
        const id = req.params.id
        const { schedule } = req.body

        await Schedule.update({
            userId: schedule.userId,
            groupId: schedule.groupId,
            date: schedule.date,
            lesson: schedule.lesson,
            subjectId: schedule.subjectId,
            classroomId: schedule.classroomId,
        }, {
            where: {
                id: id
            }
        })

        return res.status(200).json({ message: `Данные пользователя обновлены` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.updateWeek = async (req, res) => {
    try {
        const id = req.params.id
        const { schedules } = req.body

        // await Schedule.update({
        //     userId: schedule.userId,
        //     groupId: schedule.groupId,
        //     date: schedule.date,
        //     lesson: schedule.lesson,
        //     subjectId: schedule.subjectId,
        //     classroomId: schedule.classroomId,
        // }, {
        //     where: {
        //         id: id
        //     }
        // })

        return res.status(200).json({ message: `Данные пользователя обновлены` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id
        await User.destroy({
            where: {
                id: id,
            }
        })
        return res.status(204).json({ message: `Пользователь удален` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}
