import { Schema, model } from "mongoose";

const threadSchema = new Schema({
  userId: Schema.Types.ObjectId,
  title: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Thread = model("thread", threadSchema);

export default Thread;
