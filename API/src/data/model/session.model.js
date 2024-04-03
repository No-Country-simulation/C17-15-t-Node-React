import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
  tutor: { type: Schema.Types.ObjectId, ref: "Tutor" },
  student: { type: Schema.Types.ObjectId, ref: "Student" },
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  date_time: Date,
  status: String,
  rating: Number,
});

const Session = model("Session", sessionSchema);

export default Session;
