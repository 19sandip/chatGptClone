import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  required,
  email: String,
  required,
  unique,
  password: String,
});

const User = model("user", userSchema);

export default User;
