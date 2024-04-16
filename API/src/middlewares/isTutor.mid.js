export const isTutor = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "tutor") {
      error = new Error("Forbidden");
      error.statusCode = 403;
    }
    next();
  } catch (error) {
    next(error);
  }
};
