import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  name: String,
  email: String,
  hashed_password: String,
});

const Admin = model("Admin", adminSchema);

export default Admin;
