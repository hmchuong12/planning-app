import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name required!"],
      minLength: [2, "Name must contain at least 2 characters!"],
    },
    email: {
      type: String,
      required: [true, "Email required!"],
      validate: [validator.isEmail, "Please provide valid email!"],
    },
    subject: {
      type: String,
      required: [true, "Subject required!"],
      minLength: [6, "Subject must contain at least 6 characters!"],
    },
    message: {
      type: String,
      required: [true, "Message required!"],
      minLength: [9, "Message must contain at least 9 characters!"],
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
