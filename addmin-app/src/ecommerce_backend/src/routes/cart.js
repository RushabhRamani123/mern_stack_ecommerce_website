const express = require("express");
const router = express.Router();
const { addItemtoCart } = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../common-middleware/index");
router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemtoCart
);
module.exports = router;
