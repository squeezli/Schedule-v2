const User = require('../models/users.models.js')
const bcrypt = require('bcrypt')
const UserInfo = require('../models/userInfo.models.js')


exports.show = async (req, res) => {
    try {

        const id = req.params.id

        const user = await User.findOne({ where: { id } })
        if (!user) { return res.status(400).json({ message: `Пользователь не найден` }) }

        const userInfo = await UserInfo.findOne({ where: { userId: user.id } })

        return res.status(200).json({ user, userInfo })

    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}

exports.create = async (req, res) => {
    try {
        const { login, password, email, name, lastname } = req.body

        const candidate = await User.findOne({ where: { login } })

        if (candidate) { return res.status(400).json({ message: `Пользователь с таким логином: ${login}, уже зарегистрирован.` }) }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            login, password: hashPassword, email
        })

        const userInfo = await UserInfo.create({
            name, lastname, userId: user.id
        })

        return res.status(201).json({ message: `Пользователь зарегистрирован` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова.` })
    }
}

exports.update = async (req, res) => {
    try {
        const { password, email } = req.body
        const id = req.params.id
        const hashPassword = await bcrypt.hash(password, 10)
        const candidate = await User.findOne({ where: { email } })

        if (candidate) { return res.status(400).json({ message: `Пользователь с данным email: ${email}, уже зарегистрирован.` }) }

        await User.update({
            email,
            password: hashPassword,
        }, {
            where: {
                id
            }
        })

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
                id
            }
        })
        return res.status(204).json({ message: `Пользователь удален` })
    } catch (error) {
        return res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` })
    }
}
