const express = require("express");

const router = express.Router();

router.get("/webhook", (req, res) => {
  res.send("ExpenseBot AI Webhook Working ✅");
});

module.exports = router;
