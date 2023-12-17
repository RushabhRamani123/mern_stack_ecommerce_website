const express = require("express");
const router = express.Router();

const {createPage, getPages} = require("../../controllers/admin/page");
// signin route
router.post("/admin/Createpage", createPage);
router.get(`/page/:category/:type`, getPages);

module.exports = router;