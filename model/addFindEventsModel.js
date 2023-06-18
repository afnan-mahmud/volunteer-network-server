const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Events = mongoose.model("Event", eventSchema);

module.exports = Events;
