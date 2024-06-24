const express = require("express");
const uuid = require("uuid");
const { registerUser } = require("../controllers/index.controllers.js");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
