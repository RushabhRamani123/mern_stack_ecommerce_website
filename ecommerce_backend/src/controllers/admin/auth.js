const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({
        message: "Admin already registered",
      });
    }
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
      role: "admin",
    });
    await newUser.save();
    return res.status(200).json({
      message: "Admin created successfully!!!",
    });
  } catch (err) {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
};
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (!user.authenticate(req.body.password)) {
      throw new Error("Incorrect password");
    }

    if (user.role !== "admin") {
      throw new Error("User is not an admin");
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const { _id, role, firstName, lastName, email, fullName } = user;
    return res.status(200).json({
      token,
      user: { _id, role, firstName, lastName, email, fullName },
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
};
