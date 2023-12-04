const { body, validationResult } = require("express-validator");
exports.validate = [
  body("firstName").notEmpty().withMessage("firstName is required"),
  body("lastName").notEmpty().withMessage("lastName is required"),
  body("email").isEmail().withMessage("Valid Email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
exports.validateSigninRequest = [
  body("email").isEmail().withMessage("Valid Email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character long"),
];
exports.isResultValid = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()[0].msg,
      message: `Validation failed`,
    });
  }
  next();
};
