const express = require("express");
const router = express.Router();
const {editUser} = require('../Controllers/userControllers')

router.put('/:userId', editUser)
module.exports = router;