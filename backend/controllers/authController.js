const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(res, user._id);

      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
        },
        token: token,
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { name, email, mobile, password } = req.body;

    const userExists = await User.findOne({ email }); // Checking if user already exists
    if (userExists) {
      res.status(400).json({ error: "User already exists" });
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
      mobile,
      password,
    });

    if (user) {
      const token = generateToken(res, user._id); 
      
      res.status(201).json({
        message: "Registration successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
        },
        token: token,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
      throw new Error("Invalid user data");
    }
  } catch (error) {
    next(error); 
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "logout successfully" });
};

module.exports = {
  authUser,
  registerUser,
  logoutUser,
};
