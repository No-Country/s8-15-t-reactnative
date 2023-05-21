const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')
const { userRegister } = require('../controllers/userRegister')
const verifiRegisterData = require('../middleware/verifyRegisterData')

const router = Router()

router.post('/login', userLogin, userLogin)
router.post('/register', verifiRegisterData, userRegister)
// router.use('/', );

module.exports = router
