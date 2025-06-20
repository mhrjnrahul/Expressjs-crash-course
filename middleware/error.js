const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err); // don't try to respond again if headers already sent
  }

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
