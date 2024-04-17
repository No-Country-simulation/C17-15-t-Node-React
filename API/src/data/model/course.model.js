import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema, model } = mongoose;

// Definición del esquema para los contenidos del curso
const courseContentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true }, // Ejemplo: "video", "audio", "documento".
    url: { type: String, required: true },
    duration: { type: Number, required: true },
    order: { type: Number, required: true },
  },
  { _id: false, timestamps: true }
);

// Definición del esquema principal del curso
const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    tutor: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    language: { type: String, required: true },
    level: { type: String, required: true },
    thumbnail: {
      type: String,
      required: true,
      default:
        "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
    },
    status: { type: String, required: true },
    enrolled_students: [{ type: Schema.Types.ObjectId, ref: "User" }],
    pending_students: [{ type: Schema.Types.ObjectId, ref: "User" }],
    ratings: [{ type: Schema.Types.ObjectId, ref: "CourseRating" }],
    avg_rating: { type: Number, required: true, default: 0 },
    contents: [courseContentSchema], // Arreglo de contenidos
  },
  { timestamps: true }
);

courseSchema.plugin(mongoosePaginate);

courseSchema.pre("find", function() {
  this.populate("tutor_id", "-password -createdAt -updatedAt -__v")
})

courseSchema.pre("find", function() {
  this.populate("subject_id", "-createdAt -updatedAt -__v")
})

const Course = model("Course", courseSchema);

export default Course;