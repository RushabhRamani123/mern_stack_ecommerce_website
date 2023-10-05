const Cart = require("../models/cart");

exports.addItemtoCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });
      const savedCart = await cart.save();
      return res.status(200).json(savedCart);
    } else {
      let cartItems = cart.cartItems.find((item) => {
        return item.product == req.body.cartItems.product;
      });
      if (cartItems) {
        cartItems.quantity = cartItems.quantity + 1;
        cartItems.price = cartItems.price + req.body.cartItems.price;
        const savedCart = await cart.save();
        return res.status(200).json(savedCart);
      } else {
        cart.cartItems.push(req.body.cartItems);
        const savedCart = await cart.save();
        return res.status(200).json(savedCart);
      }
    }
  } catch (err) {
    return res.status(400).json({
      message: "Something went wrong in the cart controller",
    });
  }
};
