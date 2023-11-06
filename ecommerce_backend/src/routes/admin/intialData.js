const express = require("express");
const router = express.Router();
const { initialData } = require("../../controllers/admin/initialData");
router.post("/admin/intialdata", initialData);
module.exports = router;
