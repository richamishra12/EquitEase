const { userVerification } = require('../Middlewares/AuthMiddleware');



const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }
    const user = new User({ email, username, password });
    await user.save();
    return res.json({ message: "User created successfully", success: true });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ message: "Server Error", success: false });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Invalid email or password", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid email or password", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
    });

    return res.json({ message: "Login successful", success: true });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: "Server Error", success: false });
  }
});



router.post('/',userVerification);

module.exports = router;

