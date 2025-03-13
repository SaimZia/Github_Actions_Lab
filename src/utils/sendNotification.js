exports.sendNotification = (event) => {
    console.log(`Reminder: ${event.name} is happening on ${event.date} at ${event.time}`);
};