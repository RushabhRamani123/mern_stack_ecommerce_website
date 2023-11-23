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
    res.status(200).json({ categoryList : categoryList });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updateCategories = async (req, res) => {
  const { _id, name, parentId, type } = req.body;
  const updatedCategories = [];
  if (name instanceof Array) {
    for (let i = 0; i < name.length; i++) {
      const category = {
        name: name[i],
        type: type[i],
      };
      if (parentId[i] !== "") {
        category.parentId = parentId[i];
      }
      if(parentId === "Select Categories"){
        category.parentId = "";
      }
      else {
        category.parentId = "";
      }

      const updatedCategory = await Category.findOneAndUpdate(
        
        { _id: _id[i] },
        category,
        { new: true }
      );
        
      updatedCategories.push(updatedCategory);
    }
    return res.status(200).json({ updatedCategories });
  } else {
    
    const category = {
      name,
      type,
    };
    if (parentId !== "") {
      category.parentId = parentId;
    }
    if(parentId === "Select Categories"){
      category.parentId = "";
    }

    const updatedCategory = await Category.findOneAndUpdate(
      
      { _id },
      category,
      { new: true }
      
    );
    return res.status(200).json({ updatedCategory })
  }
}
exports.deleteCategories = async (req, res) => {
  const { Ids } = req.body.payload;
  // res.status(200).json({ Ids });
  const deletedCategories = [];
  for (let i = 0; i < (Ids && Ids.length) ; i++) {
    const deleteCategory = await Category.findOneAndDelete({ _id: Ids[i] });
    deletedCategories.push(deleteCategory);
  }
  res.status(200).json({ deletedCategories });
  
}