import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  threadId: Schema.Types.ObjectId,
  role: { type: String, enum: ["user", "assistant"] },
  content: String,
  createdAt: { type: Date, default: Date.now() },
});

const Message = model("Message", messageSchema);
export default Message;
