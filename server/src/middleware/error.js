export function notFound(req, _res, next) {
  const error = new Error(`Not found: ${req.originalUrl}`);
  error.status = 404;
  next(error);
}

export function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || "Server error",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack
  });
}
