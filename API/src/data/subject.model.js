import { Schema, model } from "mongoose";

const subjectSchema = new Schema({
  name: String,
  description: String,
});

const Subject = model("Subject", subjectSchema);

export default Subject;
