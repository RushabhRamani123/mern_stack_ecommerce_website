const Product = require("../models/product");
const slugify = require("slugify");
const user = require("../models/user");
const Category = require("../models/category");
const axios = require("axios");

exports.createProduct = async(req, res) => {
  const { name, price, description, category, quantity , productPictures} = req.body;
  const product = new Product({
    name: name,
    slug :name ? slugify(name) : undefined , 
    price,
    description,
    category,
    quantity,
    createdBy: req.user._id,
    productPictures,
  });

  product.save()
    .then((product) => {
      res.status(201).json({ product, files: req.files });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
}
exports.getproducts = async(req, res) => {
  const products = await Product.find({}).exec();
  res.status(200).json({ products });
}
exports.getProductsBySlug = async (req, res) => {
  const { slug } = req.params;
  const category = await Category.findOne({ slug: slug }).select("_id");
 if(category){
    const products = await Product.find({ category: category._id }).populate("category");
   res.status(200).json({
     products,
   productsByPrice: {
     under5k: products.filter((product) => product.price <= 5000),
     under10k: products.filter((product) => product.price > 5000 && product.price <= 10000),
     under15k: products.filter((product) => product.price > 10000 && product.price <= 15000),
     under20k: products.filter((product) => product.price > 15000 && product.price <= 20000),
   }
   });
  }
  else{
    res.status(400).json({message: "Category not found"});
  }
}
exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;

  Product.findOne({ _id: productId })
    .lean() // Convert the result to a plain JavaScript object
    .then(product => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

exports.deleteProductById = async (req, res) => {
  try {
    const { productId } = req.body.payload;
    console.log(productId);
    if (!productId) {
      return res.status(400).json({ error: "Params required" });
    }

    const result = await Product.deleteOne({ _id: productId }).exec();

    if (result) {
      res.status(202).json({ result });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
