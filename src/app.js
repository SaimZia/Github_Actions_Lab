const express = require("express");
const app = express();
app.use(express.json());
app.use("/auth", require("./routes/authRoutes"));
app.use("/events", require("./routes/eventRoutes"));
app.use("/reminders", require("./routes/reminderRoutes"));
module.exports = app;