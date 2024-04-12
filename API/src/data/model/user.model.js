import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "User";
const schema = new Schema(
  {
    name: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, unique: true, type: String, index: true },
    role: { required: true, type: String, enum: ["admin", "student", "tutor"] },
    password: { required: true, type: String },
    // Atributos comunes a todos los roles
    photo: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
    },
    verified: { type: Boolean, default: false, required: true },
    verifyCode: { type: String, required: true },
    city: { type: String },
    country: { type: String },
    language: { type: String },
    timezone: { type: String },
    // Atributos de estudiantes
    educational_level: {
      type: String,
      required: function () {
        return this.role === "student";
      },
    },
    interests: {
      type: [String],
      required: function () {
        return this.role === "student";
      },
    },
    // Atributos de tutores
    specialties: {
      type: [String],
      required: function () {
        return this.role === "tutor";
      },
    },
    biography: {
      type: String,
      required: function () {
        return this.role === "tutor";
      },
    },
    average_rating: {
      type: Number,
      required: function () {
        return this.role === "tutor";
      },
    },
    given_sessions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Session",
        required: function () {
          return this.role === "tutor";
        },
      },
    ],
    // Atributos de admin
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const User = model(collection, schema);

export default User;
