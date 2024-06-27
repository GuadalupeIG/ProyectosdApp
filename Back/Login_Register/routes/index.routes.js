const express = require("express");
const { registerUser } = require("../controllers/index.controllers.js");
const { loginUser } = require("../controllers/login.controllers.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
