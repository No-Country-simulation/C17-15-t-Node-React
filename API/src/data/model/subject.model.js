import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Subject"

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Subject = model(collection, schema);

export default Subject;