import { Schema, model, models } from "mongoose";

const subQuestionSchema = new Schema({
  text: {
    type: String,
    maxlength: 255,
  },
  reply: {
    type: String,
    default: "",
    maxlength: 255,
  },
});

const questionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  questions: [subQuestionSchema],
});

const Question = models.Question || model("Question", questionSchema);

export default Question;
