const { Router } = require('express')

const router = Router()

router.get('/db/sync', require('../controllers/dbSync.controllers.js').dbsync)

router.get('/f',function(req, res){ res.send('fsd')})

module.exports = router 