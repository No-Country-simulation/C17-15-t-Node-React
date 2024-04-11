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
    tutor: { type: Schema.Types.ObjectId, ref: "Tutor", required: true },
    subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    language: { type: String, required: true },
    level: { type: String, required: true },
    thumbnail: { type: String, required: true },
    status: { type: String, required: true },
    contents: [courseContentSchema], // Arreglo de contenidos
  },
  { timestamps: true }
);

courseSchema.plugin(mongoosePaginate);

const Course = model("Course", courseSchema);

export default Course;
