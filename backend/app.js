const express = require('express')
const router  = require('./src/routes/main.routes.js')
const app = express()
const dotenv = require('dotenv')
const {sequelize} = require('./src/utils/DB.utils.js')

dotenv.config()
app.use(express.json({ extended: true }))

app.use('/', router)
app.use('/api', router)
const PORT = process.env.APP_PORT

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()