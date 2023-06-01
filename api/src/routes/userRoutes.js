const express = require("express");
const router = express.Router();
const {editUser} = require('../controllers/userControllers')

router.put('/:userId', editUser)
module.exports = router;