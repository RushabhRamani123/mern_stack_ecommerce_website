const express = require("express");
const router = express.Router();
const { addCategory, getCategories , updateCategories, deleteCategories } = require("../controllers/category");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/index");
router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/getCategories", getCategories);
router.post(
  "/category/update",
  requireSignin,
  adminMiddleware,
  updateCategories
)
router.post("/category/delete" , deleteCategories);
module.exports = router;
