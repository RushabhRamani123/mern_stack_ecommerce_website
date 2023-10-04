const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  offer: {
    type: Number,
  },
  productImage: [
    {
      img: {
        type: String,
      },
    },
  ],
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      review: String,
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  upDatedAt: Date,
});

module.exports = mongoose.model("Product", productSchema);
