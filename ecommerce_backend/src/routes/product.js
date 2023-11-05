const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createProduct } = require("../controllers/product");
const { requireSignin, adminMiddleware } = require("../common-middleware/index");
const path = require("path");
const shortId = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortId.generate() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // Check if the file type is allowed
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg")
  {
      cb(null, true); 
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, and JPG files are allowed."));
  }
};

const upload = multer({ storage, fileFilter });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productImage"),
  createProduct
);

router.get("/product/get");

module.exports = router;