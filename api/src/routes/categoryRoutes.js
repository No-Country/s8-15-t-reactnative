const express = require("express");
const {getCategories}=require("../Controllers/categoryControllers");
const router = express.Router();


router.get('/', getCategories)



module.exports = router;