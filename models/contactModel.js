import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
      unique: true,
    },
    msg: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

export default model("contact", contactSchema);