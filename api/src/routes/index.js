const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')
const { userRegister } = require('../controllers/userRegister')
const { userSms } = require('../controllers/userSms')
const verifiRegisterData = require('../middleware/verifyRegisterData')

const router = Router()

router.post('/login', userLogin, userLogin)
router.post('/register', verifiRegisterData, userRegister)
router.post('/sendSMS', userSms)

module.exports = router
