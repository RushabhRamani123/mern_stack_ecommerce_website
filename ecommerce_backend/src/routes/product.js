const express = require("express");
const router = express.Router();
const multer = require("multer");
const { products } = require("../controllers/product");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/index");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortId.generate() + "-" + file.originalname);
  },
});
const shortId = require("shortid");
const upload = multer({ storage });
router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productImage"),
  products
);
router.get("/product/get");
module.exports = router;
