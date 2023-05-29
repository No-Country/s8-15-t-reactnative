const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')

const router = Router()

router.post('/sendSMS', userLogin, userLogin)

module.exports = router
