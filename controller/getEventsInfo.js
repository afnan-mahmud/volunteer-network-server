// Internal Imports
const Events = require("../model/addFindEventsModel");

async function getEventsInfo(req, res, next) {
  try {
    const events = await Events.find();
    res.status(200).send(events);
  } catch (err) {
    next(err);
  }
}

module.exports = getEventsInfo;
