import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const subjectSchema = new Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
);

subjectSchema.plugin(mongoosePaginate);

const Subject = model("Subject", subjectSchema);

export default Subject;
