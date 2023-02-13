const Subject = require('../models/subjects.models.js')


exports.show = async (req, res) => {
    try {

        const id = req.params.id

        const subject = await Subject.findOne({ where: { id } })
        if (!subject) { return res.status(400).json({ message: `Пользователь не найден` }) }

        return res.status(200).json({})

    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.create = async (req, res) => {
    try {
        const { name } = req.body

        const candidate = await Subject.findOne({ where: { name } })

        if (candidate) { return res.status(400).json({ message: `Предмет: ${name} уже добавлен.` }) }

        const subject = await Subject.create({ name })

        return res.status(201).json({ message: `Предмет добавлен` })
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
        await Subject.destroy({
            where: {
                id
            }
        })
        return res.status(204).json({ message: `Пользователь удален` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}
