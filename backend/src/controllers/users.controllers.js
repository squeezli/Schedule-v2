const { sequelize } = require('sequelize')
const User = require('../models/users.models.js')
const bcrypt = require('bcrypt')
const dotenv = require(dotenv)
dotenv.config()

exports.show = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.create = async (req, res) => {
    try {
        const { login, password, email } = req.body

        const candidate = User.findAll({ login: login })
        if (candidate) { return res.status(400).json({ message: `Пользователь с таким логином: ${login}, уже зарегистрирован.` }) }

        const hashPassword = bcrypt(password, process.env.SALT_ROUNDS)

        const user = await User.create({
            login, password, email
        })


        return res.status(201).json({ message: `Пользователь зарегистрирован` })
    } catch (error) {

    }
}

exports.update = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.delete = async (req, res) => {
    try {

    } catch (error) {

    }
}

exports.delete = async (req, res) => {
    try {

    } catch (error) {

    }
}