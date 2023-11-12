const express = require("express");
const app = express();
const router = express.Router();
const multer = require("multer");
const { createProduct } = require("../controllers/product");
const { requireSignin, adminMiddleware } = require("../common-middleware/index");
const { getProductsBySlug } = require("../controllers/product");
const path = require("path");
const shortId = require("shortid");
app.use(express.static(path.join(path.dirname(__dirname), "uploads")));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortId.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage })

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productImage"),
  createProduct
);
router.get("/products/:slug", getProductsBySlug);
module.exports = router;