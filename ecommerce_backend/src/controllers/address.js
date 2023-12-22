// const address = require("../models/address");
const UserAddress = require("../models/address");
exports.addAddress = async (req, res) => {
    try {
      const { payload } = req.body;
      if (payload.address) {
        let address;
        if (payload.address._id) {
          address = await UserAddress.findOneAndUpdate(
            { user: req.user._id, "address._id": payload.address._id },
            {
              $set: {
                "address.$": payload.address,
              },
            },
            { new: true }
          ).exec();
        } else {
          address = await UserAddress.findOneAndUpdate(
            { user: req.user._id },
            {
              $push: {
                address: payload.address,
              },
            },
            { new: true, upsert: true }
          ).exec();
        }
        if (address) {
          res.status(201).json({ address });
        } else {
          res.status(404).json({ error: "Address not found" });
        }
      } else {
        res.status(400).json({ error: "Params address required" });
      }
    } catch (error) {
      console.error("Error in addAddress:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  };
  

  exports.getAddress = async (req, res) => {
    try {
      const userAddress = await UserAddress.findOne({ user: req.user._id }).exec();
      
      if (userAddress) {
        res.status(200).json({ userAddress });
      } else {
        res.status(404).json({ error: "User address not found" });
      }
    } catch (error) {
      console.error("Error in getAddress:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  };
  