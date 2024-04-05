import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Subject"

const schema = new Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
);

subjectSchema.plugin(mongoosePaginate);

const Subject = model(collection, schema);

export default Subject;
