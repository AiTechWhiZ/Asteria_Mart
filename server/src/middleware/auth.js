import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function protect(req, _res, next) {
  const token = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : null;
  if (!token) {
    const error = new Error("Authentication required");
    error.status = 401;
    return next(error);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) throw new Error("User not found");
    next();
  } catch {
    const error = new Error("Invalid or expired token");
    error.status = 401;
    next(error);
  }
}

export function adminOnly(req, _res, next) {
  if (req.user?.role !== "admin") {
    const error = new Error("Admin access required");
    error.status = 403;
    return next(error);
  }
  next();
}
