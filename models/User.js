import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["male", "Male", "female", "Female"],
  },
  hasPC: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["yes", "Yes", "No", "no"],
  },
});

const User = models.User || model("User", userSchema);

export default User;
