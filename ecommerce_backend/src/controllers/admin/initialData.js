const Category = require("../../models/category");
const Product = require("../../models/product");

exports.initialData = async (req, res) => {
//     function createCategories(categories, parentId = null) {
//         const categoryList = [];
//         let category;
//         if (parentId == null) {
//           category = categories.filter((cat) => cat.parentId == undefined);
//         } else {
//           category = categories.filter((cat) => cat.parentId == parentId);
//         }
      
//         for (let cate of category) {
//           categoryList.push({
//             _id: cate._id,
//             name: cate.name,
//             slug: cate.slug,
//             parentId: cate.parentId,
//             type: cate.type,
//             children: createCategories(categories, cate._id),
//           });
//         }
//         return categoryList;
    //       }
    // :createCategories(categories)
      
    const categories = await Category.find(); 
    const products = await Product.find();
    res.status(200).json({
        categories,
        products
    })
}; 
