const { users } = require("../models/dataStore");
exports.register = (req, res) => {
    const { username } = req.body;
    const userId = users.length + 1;
    users.push({ id: userId, username });
    res.json({ userId, message: "User registered successfully" });
};