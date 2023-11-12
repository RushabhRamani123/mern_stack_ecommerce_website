const Product = require("../models/product");
const slugify = require("slugify");
const user = require("../models/user");
const Category = require("../models/category");
exports.createProduct = (req, res) => {
  const { name, price, description, category, quantity } = req.body;
  let productPictures = []; 
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename};
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    description,
    category,
    quantity,
    createdBy: req.user._id,
    productPictures: productPictures,
  });

  product.save()
    .then((product) => {
      res.status(201).json({ product, files: req.files });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
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