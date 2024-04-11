import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "User";
const schema = new Schema(
  {
    name: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, unique: true, type: String, index: true },
    role: { required: true, type: Number, default: 0, enum: [0, 1, 2]},
    password: { required: true, type: String },
    photo: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
    },
    requested_sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
    verified: { type: Boolean, default: false, required: true,  },
    verifyCode: { type: String, required: true },
    city: { type: String },
    country: { type: String },
    language: { type: String },
    timezone: { type: String },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate)

const User = model(collection, schema)

export default User
