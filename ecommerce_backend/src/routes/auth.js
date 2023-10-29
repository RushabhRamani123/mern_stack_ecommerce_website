const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { signup, signin } = require("../controllers/auth");
const {
  validate,
  isResultValid,
  validateSigninRequest,
} = require("../validator/auth");

// signup route
router.post("/signup", validate, isResultValid, signup);
// signin route
router.post("/signin", validateSigninRequest, isResultValid, signin);
//signout route

module.exports = router;
