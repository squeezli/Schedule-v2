const User = require('../models/users.models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        // const errors = validationResult(req)

        // if (!errors.isEmpty()) {
        //     return res.status(400).json({
        //         errors: errors.array(),
        //         message: ('Некорректные данные при входе в систему')
        //     })
        // }

        const { login, password } = req.body
        const user = await User.findOne({where:{ login:login }})

        if (!user) {
            return res.status(400).json({ message: 'Неверный login и/или пароль' })
        }

        const isPassValid = await bcrypt.compare(password, user.password)

        if (!isPassValid) {
            return res.status(400).json({ message: 'Неверный email и/или пароль' })
        }

        const token = jwt.sign(
            { userID: user.id },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        )
        
        return res.json({
            token,
            id:user.id,
            rules:user.rules
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'что то пошло не так, попробуйте снова' })
    }
}
