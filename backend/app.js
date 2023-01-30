const dotenv = require('dotenv')
const express = require('express')
const router  = require('./src/routes/main.routes.js')

const app = express()

app.use(express.json({ extended: true }))

// app.use('/api', router)
app.use('/api',function(res,req){res.send('das')} )

dotenv.config()
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