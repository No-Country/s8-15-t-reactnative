const express = require("express");
const router = express.Router();
const {editUser, getUser, getAllusers } = require('../controllers/userControllers')

router.put('/:userId', editUser)

router.get('/:userId', getUser)

router.get('/', getAllusers)

module.exports = router;