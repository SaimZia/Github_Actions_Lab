const { events } = require("../models/dataStore");
exports.getUpcomingReminders = (userId) => {
    return events.filter(event => event.userId == userId && event.reminder);
};