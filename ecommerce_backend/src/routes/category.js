const express = require("express");
const router = express.Router();
const { addCategory, getCategories } = require("../controllers/category");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/index");

router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/get", getCategories);
module.exports = router;
