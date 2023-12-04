const User = require("../models/user");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({
        message: "User already registered",
      });
    }
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
    });
    console.log("newUser", newUser);
    await newUser.save();
    return res.status(200).json({
      message: "User created successfully!!!",
    });
  } catch (err) {
    console.error("Error in signup controller:", err);
    return res.status(400).json({
     error: err,
    });
  }
}
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    if (user.authenticate(req.body.password)) {
      const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      const { _id, firstName, lastName, email, fullName } = user;
      return res.status(200).json({
        token,
        user: { _id, firstName, lastName, email, fullName },
        message: "Logged in successfully",
      });
    } else {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
};
