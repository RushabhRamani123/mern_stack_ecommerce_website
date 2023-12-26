const Order = require("../../models/order");

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.updateOne(
      { _id: req.body.orderId, "orderStatus.type": req.body.type },
      {
        $set: {
          "orderStatus.$": [
            { type: req.body.type, date: new Date(), isCompleted: true },
          ],
        },
      }
    );

    console.log('Update Result:', order);
    if (order.modifiedCount > 0) {
      res.status(201).json({ order });
    } else {
      res.status(404).json({ error: 'Order not found or not updated' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getCustomerOrders= async (req, res) => {
  try {
    const orders = await Order.find({}).populate("items.productId", "name").exec();
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
