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

  try {
    const newCategory = new Category(category);
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
//Getting the categories(recursive function)
const getcategoryList = (categories, parentId) => {
  const categoryList = [];
  let category;
  if (parentId === null) {
    category = categories.filter((cat) => cat.parentId == null);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
    });
    categoryList.push(getcategoryList(categories, cate._id));
  }
  return categoryList;
};
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    const categoryList = getcategoryList(categories);
    res.status(200).json(categoryList);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
