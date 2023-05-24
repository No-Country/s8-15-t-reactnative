const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')
const { userRegister } = require('../controllers/userRegister')
const verifiRegisterData = require('../middleware/verifyRegisterData')
const userRoutes = require('./userRoutes')

const router = Router()

router.post('/login', userLogin, userLogin)
router.post('/register', verifiRegisterData, userRegister)
router.use('/user', userRoutes );

module.exports = router
