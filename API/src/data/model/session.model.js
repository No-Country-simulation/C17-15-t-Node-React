import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Session";

const schema = new Schema(
  {
    tutor: { type: Schema.Types.ObjectId, ref: "User", required: true },
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subject: { type: Schema.Types.ObjectId, ref: "Subject" },
    date_time: Date,
    status: String,
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Session = model(collection, schema);

export default Session;
