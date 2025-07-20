const express = require("express");
const { register, login } = require("../controller/user.controller");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Password must be 6+ characters").isLength({ min: 6 }),
  ],
  register
);

router.post(
  "/login",
  [
    check("email", "Valid email required").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login
);

module.exports = router;
