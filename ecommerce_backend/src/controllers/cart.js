const Cart = require('../models/cart');

async function runUpdate(condition, update) {
  return Cart.findOneAndUpdate(condition, update, { new: true }).exec();
}
exports.addItemToCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).exec();
    if (cart) {
      let promiseArray = [];
      req.body.cartItems.forEach((cartItem) => {
        const product = cartItem.product;
        const item = cart.cartItems.find((c) => c.product.toString() === product.toString());
        let condition, update;

        if (item) {
          condition = { user: req.user._id, "cartItems.product": product };
          update = {
            $set: {
              "cartItems.$": cartItem,
            },
          };
        } else {
          condition = { user: req.user._id };
          update = {
            $push: {
              cartItems: cartItem,
            },
          };
        }

        promiseArray.push(runUpdate(condition, update));
      });

      await Promise.all(promiseArray);
      res.status(201).json({ message: "Cart updated successfully" });
    } else {
      const newCart = new Cart({
        user: req.user._id,
        cartItems: req.body.cartItems,
      });

      const savedCart = await newCart.save();
      res.status(201).json({ cart: savedCart });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getCartItems = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    const cart = await Cart.findOne({ user: req.user._id }).populate("cartItems.product", "_id name price").exec();
    if (cart) {
      let cartItems = {};
      console.log(cart.cartItems);
      cart.cartItems.forEach((item, index) => {
        cartItems[item.product._id.toString()] = {
          _id: item.product._id.toString(),
          name: item.product.name,
          img: item.img ,
          price: item.product.price,
          qty: item.quantity,
        };
      });
      res.status(200).json({ cartItems });
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    console.error("Error in getCartItems:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};
exports.removeCartItem = async (req, res) => {
  try {
    const {productId} = req.body;
    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      { $pull: { cartItems: { product: productId } } },
      { new: true }
      );
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in removeCartItem:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};
exports.clearCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      {user: req.user._id},
      {$set:{cartItems:[]}},
      {new:true}
      );
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in removeCartItem:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};




