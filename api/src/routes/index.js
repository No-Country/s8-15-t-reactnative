const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')
const { userRegister } = require('../controllers/userRegister')

const router = Router()

router.get('/login', userLogin)
router.get('/register', userRegister)
//router.use('/', );

module.exports = router
