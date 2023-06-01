const express = require("express");
const {getCategories}=require("../controllers/categoryControllers");
const router = express.Router();


router.get('/', getCategories)



module.exports = router;