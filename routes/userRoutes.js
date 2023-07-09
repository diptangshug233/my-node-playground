const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentnUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentnUser);

module.exports = router;
