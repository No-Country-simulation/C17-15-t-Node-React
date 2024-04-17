import { Schema, model, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const collection = "Course"

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
const schema = new Schema(
  {
    title: { type: String, required: true },
    tutor_id: { type: Types.ObjectId, ref: "User", required: true },
    subject_id: { type: Types.ObjectId, ref: "Subject", required: true },
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
    enrolled_students: [{ type: Types.ObjectId, ref: "User" }],
    pending_students: [{ type: Types.ObjectId, ref: "User" }],
    ratings: [{ type: Types.ObjectId, ref: "CourseRating" }],
    avg_rating: { type: Number, required: true, default: 0 },
    contents: [courseContentSchema], // Arreglo de contenidos
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

schema.pre("find", function() {
  this.populate("tutor_id");
});

schema.pre("find", function() {
  this.populate("subject_id");
});

const Course = model(collection, schema);

export default Course;