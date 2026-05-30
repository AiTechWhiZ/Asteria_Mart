import crypto from "crypto";
import express from "express";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";
import { signToken } from "../utils/token.js";

const router = express.Router();

function sendAuth(res, user) {
  res.json({
    token: signToken(user),
    user: { id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar }
  });
}

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "Email already registered" });
    const user = await User.create({ name, email, password });
    sendAuth(res, user);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    sendAuth(res, user);
  } catch (error) {
    next(error);
  }
});

router.get("/me", protect, (req, res) => res.json({ user: req.user }));

router.put("/profile", protect, async (req, res, next) => {
  try {
    const fields = ["name", "phone", "avatar", "addresses"];
    fields.forEach((field) => {
      if (req.body[field] !== undefined) req.user[field] = req.body[field];
    });
    await req.user.save();
    res.json({ user: req.user });
  } catch (error) {
    next(error);
  }
});

router.post("/forgot-password", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      user.resetPasswordToken = crypto.randomBytes(24).toString("hex");
      user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
      await user.save();
    }
    res.json({ message: "If this email exists, a reset link has been generated.", token: user?.resetPasswordToken });
  } catch (error) {
    next(error);
  }
});

router.post("/reset-password", async (req, res, next) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() }
    });
    if (!user) return res.status(400).json({ message: "Reset token is invalid or expired" });
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.json({ message: "Password reset successful" });
  } catch (error) {
    next(error);
  }
});

export default router;
