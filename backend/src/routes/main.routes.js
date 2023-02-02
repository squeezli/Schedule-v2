const { Router } = require('express')
const router = Router()
const admins = require('../controllers/admins.controllers')
const buildings = require('../controllers/buildings.controllers')
const users = require('../controllers/users.controllers')
const schedules = require('../controllers/schedules.controllers')
const calls = require('../controllers/calls.controllers')
const groups = require('../controllers/groups.controllers')
const subjects = require('../controllers/subjects.controllers')
const classrooms = require('../controllers/classrooms.controllers')

//admin route
router.use('/admin',)
router.get('/admin/:id',admins.show)
router.post('/admin/create',admins.create)
router.put('/admin/update',admins.update)
router.delete('/admin/delete/:id',admins.delete)

//building route
router.use()
router.get('/building/:id',buildings.show)
router.post('/building/create',buildings.create)
router.put('/building/update',buildings.update)
router.delete('/building/delete/:id',buildings.delete)

//user route
router.use()
router.get('/user/:id',users.show)
router.post('/user/create',users.create)
router.put('/user/update',users.update)
router.delete('/user/delete/:id',users.delete)

//schedule route
router.use()
router.get('/schedule/:id',schedules.show)
router.post('/schedule/create',schedules.create)
router.put('/schedule/update',schedules.update)
router.delete('/schedule/delete/:id',schedules.delete)

//call route
router.use()
router.get('/call/:id',calls.show)
router.post('/call/create',calls.create)
router.put('/call/update',calls.update)
router.delete('/call/delete/:id',calls.delete)

//group route
router.use()
router.get('/group/:id',groups.show)
router.post('/group/create',groups.create)
router.put('/group/update',groups.update)
router.delete('/group/delete/:id',groups.delete)

//subject route
router.use()
router.get('/subject/:id',subjects.show)
router.post('/subject/create',subjects.create)
router.put('/subject/update',subjects.update)
router.delete('/subject/delete/:id',subjects.delete)

//classrooms route
router.use()
router.get('/classrooms/:id',classrooms.show)
router.post('/classrooms/create',classrooms.create)
router.put('/classrooms/update',classrooms.update)
router.delete('/classrooms/delete/:id',classrooms.delete)

router.get('/db/sync', require('../controllers/dbSync.controllers.js').dbsync)

module.exports = router 