const Call = require('../models/calls.models.js')


exports.show = async (req, res) => {
    try {

        const id = req.params.id

        const call = await Call.findOne({ where: { id } })
        if (!call) { return res.status(400).json({ message: `Расписание не найдено` }) }

        return res.status(200).json({})

    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.showById = async (req, res) => {
    try {

        const id = req.params.id

        const call = await Call.findOne({ where: { id } })
        if (!call) { return res.status(400).json({ message: `Расписание не найдено` }) }

        return res.status(200).json({})

    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.create = async (req, res) => {
    try {
        const { name } = req.body

        const candidate = await Call.findOne({ where: { name } })

        if (candidate) { return res.status(400).json({ message: `Аудитория: ${name} добавлена.` }) }

        const call = await Call.create({ name })

        return res.status(201).json({ message: `Аудитория добавлена` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова.` })
    }
}

exports.update = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id
        await Call.destroy({
            where: {
                id
            }
        })
        return res.status(204).json({ message: `Аудитория удалена` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}
