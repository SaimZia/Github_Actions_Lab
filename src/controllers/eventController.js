const { events } = require("../models/dataStore");
exports.createEvent = (req, res) => {
    const { name, description, date, time, category, reminder } = req.body;
    const eventId = events.length + 1;
    const event = { id: eventId, name, description, date, time, category, reminder, userId: req.userId };
    events.push(event);
    res.json({ message: "Event created successfully", event });
};

exports.getEvents = (req, res) => {
    res.json(events.filter(event => event.userId == req.userId));
};

exports.deleteEvent = (req, res) => {
    const { eventId } = req.params;
    const index = events.findIndex(event => event.id == eventId && event.userId == req.userId);
    if (index === -1) return res.status(404).json({ message: "Event not found" });
    events.splice(index, 1);
    res.json({ message: "Event deleted successfully" });
};