const { Router } = require('express')
const { userSms } = require('../controllers/userSms')

const router = Router()

router.post('/sendSMS', userSms)

module.exports = router
