import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema, model } = mongoose;

// Definición del esquema para las calificaciones de los cursos
const courseRatingSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: false },
  },
  { timestamps: true }
);

// Aplicar el plugin de paginación al esquema de calificaciones de cursos
courseRatingSchema.plugin(mongoosePaginate);

// Creación del modelo 'CourseRating' a partir del esquema definido
const CourseRating = model("CourseRating", courseRatingSchema);

export default CourseRating;
