const express = require("express");
const {postTransaction, getTransactions}=require("../controllers/TransactionControllers");
const router = express.Router();

router.post("/", postTransaction)
router.get("/:userId", getTransactions)


module.exports = router;