const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')
const { userRegister } = require('../controllers/userRegister')
const { userSms } = require('../controllers/userSms')
const verifiRegisterData = require('../middleware/verifyRegisterData')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const transactionRoutes = require('./transactionRoutes')
const { userMessageEmail } = require('../controllers/userMessageEmail')

const verifyLoginData=require('../middleware/verifyLoginData')

const { userEdit } = require('../controllers/userEdit')


const router = Router()

router.post('/login', verifyLoginData, userLogin)
router.post('/register', verifiRegisterData, userRegister)
router.put('/user-edit/:userId', userEdit);
router.post('/sendSMS', userSms)
router.use('/user', userRoutes );
router.use('/category', categoryRoutes );
router.use('/transaction', transactionRoutes );
router.post('/sendSMS', userSms)

router.post('/enviar-correo',userMessageEmail)

module.exports = router
