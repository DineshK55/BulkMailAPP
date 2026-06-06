const express = require("express");
const router = express.Router();

const {
  sendEmail,
  getEmailHistory,
} = require("../controllers/emailController");

router.post("/send", sendEmail);

router.get("/history", getEmailHistory);

module.exports = router;