import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const adminSchema = new Schema(
  {
    name: String,
    email: String,
    hashed_password: String,
  },
  { timestamps: true }
);

adminSchema.plugin(mongoosePaginate);

const Admin = model("Admin", adminSchema);

export default Admin;
