const Product = require("../models/product");
const slugify = require("slugify");
exports.products = async (req, res) => {
  try {
    const { name, price, category, description, quantity } = req.body;
    const createdBy = req.user._id;
    let productImage = [];
    if (req.files.length > 0) {
      for (let i = 0; i < req.files.length; i++) {
        productImage.push({
          img: req.files[i].filename,
        });
      }
    }
    const products = new Product({
      name: name,
      slug: slugify(name),
      price,
      description,
      quantity,
      category,
      createdBy,
      productImage,
    });
    try {
      const savedProduct = await products.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(400).json({ error });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
