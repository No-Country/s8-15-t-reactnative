const { Router } = require('express')
const { userLogin } = require('../controllers/userLogin')
const { userRegister } = require('../controllers/userRegister')
const verifiRegisterData = require('../middleware/verifyRegisterData')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const transactionRoutes = require('./transactionRoutes')

const router = Router()

router.post('/login', userLogin, userLogin)
router.post('/register', verifiRegisterData, userRegister)
router.use('/user', userRoutes );
router.use('/category', categoryRoutes );
router.use('/transaction', transactionRoutes );

module.exports = router
