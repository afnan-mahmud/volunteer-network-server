// External Imports
const express = require("express");

// Internal Imports
const getEventsInfo = require("../controller/getEventsInfo");
const addEvents = require("../controller/addEvents");
const checkLogIn = require("../controller/checkLogIn");

// Internal Imports
const router = express.Router();

router.get("/info", getEventsInfo);

router.post("/addevents", checkLogIn, addEvents);

module.exports = router;
