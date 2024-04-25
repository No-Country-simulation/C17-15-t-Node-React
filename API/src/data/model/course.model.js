import { Schema, model, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const collection = "Course"

// Definición del esquema para los contenidos del curso
const courseRatingSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5]},
    comment: { type: String }
  },
  { timestamps: true }
);

const enrolledStudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const courseContentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    url: { type: String, required: true },
    duration: { type: Number, required: true },
    order: { type: Number, required: true },
  },
  { _id: false, timestamps: true }
);

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
    enrolled_students: [enrolledStudentSchema],
    ratings: [courseRatingSchema],
    avg_rating: { type: Number },
    contents: [courseContentSchema], // Arreglo de contenidos
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

schema.pre("findOne", function() {
  this.populate("tutor_id", "-verified -verifyCode -password -__v -createdAt -updatedAt");
  this.populate("subject_id", "-__v -createdAt -updatedAt");
});

schema.pre("find", function() {
  this.populate("tutor_id", "-password -__v -createdAt -updatedAt");
  this.populate("subject_id", "-__v -createdAt -updatedAt");
});

const Course = model(collection, schema);

export default Course;