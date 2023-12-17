const Page = require("../../models/page");

exports.createPage = async (req, res) => {
  try {
    // Find the page with the specified category
    const existingPage = await Page.findOne({ category: req.body.category });

    // If a page with the category already exists, update it
    if (existingPage) {
      const updatedPage = await Page.findOneAndUpdate(
        { category: req.body.category },
        req.body,
        { new: true } // Return the updated document
      );
      return res.status(201).json({ page: updatedPage });
    }

    // If no page with the category exists, create a new one
    const newPage = new Page(req.body);
    const savedPage = await newPage.save();
    return res.status(201).json({ page: savedPage});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getPages = async (req, res) => {
  try {
    const { category, type } = req.body; 
    if (type == "page") {
      const pages = await Page.find({ category });
      return res.status(200).json({ pages });
    }
  }
  catch (error) {
    return res.status(400).json({ error: error.message });
  }
}