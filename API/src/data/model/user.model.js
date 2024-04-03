import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "users";

const schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: Number, required: true, default: 0, enum: [0, 1, 2] },
    photo: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
    },
    verified: { type: Boolean, required: true, default: false },
    verifyCode: { type: String, required: true },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate)

const User = model(collection, Schema);

export default User;
