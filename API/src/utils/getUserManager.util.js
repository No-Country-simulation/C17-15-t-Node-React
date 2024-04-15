import { admin, tutor, student } from "../data/mongoManager.js";

export function getUserManager(userType) {
  switch (userType) {
    case "admin":
      return admin;
    case "student":
      return student;
    case "tutor":
      return tutor;
    default:
      throw new Error("Invalid user type");
  }
}
