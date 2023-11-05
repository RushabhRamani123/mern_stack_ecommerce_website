const Product = require("../models/product");
const slugify = require("slugify");
const user = require("../models/user");


exports.createProduct = (req, res) => {
  //res.status(200).json( { file: req.files, body: req.body } );

  const { name, price, description, category, quantity } = req.body;
  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.location };
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
