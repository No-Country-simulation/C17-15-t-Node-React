export const isStudent = (req, res, next) => {
    try {
      const { role } = req.user;
      if (role !== "student") {
        error = new Error("Forbidden");
        error.statusCode = 403;
      }
      next();
    } catch (error) {
      next(error);
    }
  };
  