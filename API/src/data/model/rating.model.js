import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Rating"

const schema = new Schema(
  {
    tutor: { type: Schema.Types.ObjectId, ref: "Tutor", required: true },
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    comment: { type: String, required: false }, 
    score: { type: Number, min: 1, max: 5, required: true },
  },
  { timestamps: true }
);

ratingSchema.plugin(mongoosePaginate);

const Rating = model(collection, schema);

export default Rating;
