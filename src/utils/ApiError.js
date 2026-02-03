class ApiError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.success = false;
  }
}

export default ApiError;
