exports.getReminders = (req, res) => {
    const upcomingReminders = events.filter(event => event.reminder);
    res.json(upcomingReminders);
};