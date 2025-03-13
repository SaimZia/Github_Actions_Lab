const express = require("express");
const { getReminders } = require("../controllers/reminderController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.get("/reminders", authMiddleware, getReminders);
module.exports = router;