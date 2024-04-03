import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const sessionSchema = new Schema(
  {
    tutor: { type: Schema.Types.ObjectId, ref: "Tutor" },
    student: { type: Schema.Types.ObjectId, ref: "Student" },
    subject: { type: Schema.Types.ObjectId, ref: "Subject" },
    date_time: Date,
    status: String,
  },
  { timestamps: true }
);

sessionSchema.plugin(mongoosePaginate);

const Session = model("Session", sessionSchema);

export default Session;
