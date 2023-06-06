const { Router } = require('express')
const { userSms } = require('../controllers/userSms')
const { userMessageEmail } = require('../controllers/userMessageEmail')

const router = Router()

router.post('/sendSMS', userSms)
router.post('/enviar-correo',userMessageEmail)

module.exports = router
