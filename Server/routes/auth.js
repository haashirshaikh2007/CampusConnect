const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

/* SIGNUP */
router.post("/signup", async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      role,
      collegeName,
      committeeName,
      phone,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      collegeName,
      committeeName,
      phone,
    });

    res.status(201).json({
      message: "Account created",
      status: user.verified ? "approved" : "pending",
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!user.verified) {
      return res
        .status(403)
        .json({ message: "Account pending approval" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      role: user.role,
      fullName: user.fullName,
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
