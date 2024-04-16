export const isAdmin = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      error = new Error("Forbidden");
      error.statusCode = 403;
    }
    next();
  } catch (error) {
    next(error);
  }
};
