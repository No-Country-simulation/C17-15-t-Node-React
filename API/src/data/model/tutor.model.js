import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Tutor"

const schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    specialties: [String],
    biography: String,
    average_rating: Number,
    given_sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
    photo: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
    },
    verified: { type: Boolean, required: true, default: false },
    verifyCode: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    language: { type: String, required: true },
    timezone: { type: String, required: true },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Tutor = model(collection, schema);

export default Tutor;
