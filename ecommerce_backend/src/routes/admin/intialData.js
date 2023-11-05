const express = require("express");
const router = express.Router();
router.post("/admin/signup", validate, isResultValid, signup);
module.exports = router;

