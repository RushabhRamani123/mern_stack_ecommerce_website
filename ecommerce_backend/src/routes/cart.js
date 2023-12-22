const express = require("express");
const router = express.Router();
const { addItemToCart , getCartItems } = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../common-middleware/index");
// additems to the cart
router.post("/user/cart/addtocart", requireSignin,userMiddleware,addItemToCart );
// getitem from the cart 
router.post("/user/getCartItems", requireSignin,userMiddleware,getCartItems);
module.exports = router;
