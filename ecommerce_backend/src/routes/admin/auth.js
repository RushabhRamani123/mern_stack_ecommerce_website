const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const {
  validate,
  isResultValid,
  validateSigninRequest,
} = require("../../validator/auth");
const { signup, signin } = require("../../controllers/admin/auth");
// signin route
router.post("/admin/signin", validateSigninRequest, isResultValid, signin);
// signup route
router.post("/admin/signup", validate, isResultValid, signup);
module.exports = router;
