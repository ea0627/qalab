const express = require("express");

const { login, getMe } = require("../controllers/auth.controller");
const authenticateUser = require("../middlewares/authenticateUser");

const router = express.Router();

router.post("/login", login);
router.get("/me", authenticateUser, getMe);

module.exports = router;