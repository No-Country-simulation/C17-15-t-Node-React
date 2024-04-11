import jwt from "jsonwebtoken";

export const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 60 * 24 * 7,
  });
  return token;
};

// export const verifyToken = (cookies) => {
//   const token = cookies.token;
//   if (!token) {
//     const error = new Error("Bad Auth!");
//     error.statusCode = 401;
//     throw error;
//   }
//   return jwt.verify(token, process.env.JWT_SECRET_KEY);
// };
