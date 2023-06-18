// Internal Imports
const Events = require("../model/addFindEventsModel");

const addEvents = async (req, res, next) => {
  const newEvent = new Events({ ...req.body });
  try {
    const result = await newEvent.save();
    if (result) {
      res.status(200).json({
        message: "Event added successfully",
      });
    } else {
      res.status(400).json({
        error: "Evnet are not added-else",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: "Evnet are not added-catch",
    });
  }
};

module.exports = addEvents;
