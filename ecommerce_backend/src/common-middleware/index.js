const jwt = require("jsonwebtoken");
const User = require("../models/user");
exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(400).json({
      message: "Authorization header missing",
    });
  }
};

exports.userMiddleware = (req, res, next) => {
  const user = User.find({ role: "user" });
  if (!user) {
    return res.status(403).json({ message: "User only: Access Denied" });
  }
  next();
};

exports.adminMiddleware = (req, res, next) => {
  const user = User.find({ role: "admin" });
  console.log(req.user.role);
  if (!user) {
    return res.status(403).json({ message: "Admin only: Access Denied" });
  }
  next();
};
