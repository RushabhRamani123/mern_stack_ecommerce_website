const slugify = require("slugify");
const Category = require("../models/category");
//Adding the category
exports.addCategory = async (req, res) => {
  const category = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    category.parentId = req.body.parentId;
  }
  if (req.file) {
    category.categoryImage = "/public/" + req.file.filename;
  }
  const cat = new Category(category);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      type: cate.type,
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    const categoryList = createCategories(categories);
    res.status(200).json({ categoryList });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};