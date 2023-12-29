const express = require("express");
// const Cart = require("../models/cart");
const router = express.Router();
const { addItemToCart , getCartItems ,removeCartItem,clearCartItem } = require("../controllers/cart");
const { requireSignin, userMiddleware} = require("../common-middleware/index");
// additems to the cart
router.post("/user/cart/addtocart", requireSignin,userMiddleware,addItemToCart );
// getitem from the cart 
router.post("/user/getCartItems", requireSignin, userMiddleware, getCartItems);
// remove the cart item
router.post("/user/cart/removeItem", requireSignin, userMiddleware, removeCartItem);
// clear the cart item 
router.post("/user/cart/clearCart", requireSignin, userMiddleware, clearCartItem );
module.exports = router;
