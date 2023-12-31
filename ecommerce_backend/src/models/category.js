const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
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
  type: {
    type: String,
  },
  parentId: {
    type: String,
  },
});
module.exports = mongoose.model("Category", categorySchema);
