const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')
const { userRegister } = require('../controllers/userRegister')
const { userSms } = require('../controllers/userSms')
const verifiRegisterData = require('../middleware/verifyRegisterData')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const transactionRoutes = require('./transactionRoutes')
const { userMessageEmail } = require('../controllers/userMessageEmail')
const { userEdit } = require('../controllers/userEdit')

const router = Router()

router.post('/login', userLogin, userLogin)
router.post('/register', verifiRegisterData, userRegister)
router.put('/user-edit', userEdit);
router.post('/sendSMS', userSms)
router.use('/user', userRoutes );
router.use('/category', categoryRoutes );
router.use('/transaction', transactionRoutes );
router.post('/enviar-correo',userMessageEmail)

module.exports = router
