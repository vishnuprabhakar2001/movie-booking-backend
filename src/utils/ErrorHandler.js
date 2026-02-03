const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 400;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};

export default errorHandler;
