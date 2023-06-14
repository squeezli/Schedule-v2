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
const auth = require('../controllers/auth.controllers')

const authMiddleware = require('../middlewares/auth.middleware')

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/auth', auth.login)
//admin route
// router.use('/admin')
router.get('/admin/:id',authMiddleware,admins.show)
router.post('/admin/create',authMiddleware,admins.create)
router.put('/admin/update/:id',authMiddleware,admins.update)
router.delete('/admin/delete/:id',authMiddleware,admins.delete)

//building route
// router.use()
router.get('/building/list',buildings.list)
router.get('/building/:id',buildings.show)

router.post('/building/create',authMiddleware,buildings.create)
router.put('/building/update/:id',authMiddleware,buildings.update)
router.delete('/building/delete/:id',authMiddleware,buildings.delete)

//user route
// router.use()
router.get('/user/list',users.list)
router.get('/user/:id',users.show)

router.post('/user/create',authMiddleware,users.create)
router.put('/user/update/:id',authMiddleware,users.update)
router.delete('/user/delete/:id',authMiddleware,users.delete)

//schedule route
// router.use()
router.get('/schedule/group/:number',schedules.showByGroup)
router.get('/schedule/user/:fio',schedules.showByUser)
router.post('/schedule/upload',upload.single('file'),authMiddleware, schedules.createByCsv)



//call route
// router.use()
router.get('/call/:id',calls.show)

router.post('/call/create',authMiddleware,calls.create)
router.put('/call/update/:id',authMiddleware,calls.update)
router.delete('/call/delete/:id',authMiddleware,calls.delete)

//group route
// router.use()
router.get('/group/list',groups.list)
router.get('/group/:id',groups.show)

router.post('/group/create',authMiddleware,groups.create)
router.put('/group/update/:id',authMiddleware,groups.update)
router.delete('/group/delete/:id',authMiddleware,groups.delete)

//subject route
// router.use()
router.get('/subject/:id',authMiddleware,subjects.show)
router.post('/subject/create',authMiddleware,subjects.create)
router.put('/subject/update/:id',authMiddleware,subjects.update)
router.delete('/subject/delete/:id',authMiddleware,subjects.delete)

//classrooms route
// router.use()
router.get('/classrooms/:id',authMiddleware,classrooms.show)
router.post('/classrooms/create',authMiddleware,classrooms.create)
router.put('/classrooms/update/:id',authMiddleware,classrooms.update)
router.delete('/classrooms/delete/:id',authMiddleware,classrooms.delete)

router.get('/db/sync', require('../controllers/database.controllers.js').dbSync)
router.get('/db/seed', require('../controllers/database.controllers.js').dbSeed)

module.exports = router 