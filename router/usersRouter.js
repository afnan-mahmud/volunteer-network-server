// External Imports
const express = require("express");
const { addUser, logInUser } = require("../controller/addUser");
const router = express.Router();

router.post("/register", addUser);
router.post("/login", logInUser);

module.exports = router;
