import Message from "../models/messageModel.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { json } from "express";
dotenv.config();

const getAllMsg = async (threadId) => {
  if (!threadId) {
   return json({ message: "Error : Can't get messages", success: false }); 
  }

  try{
    const allMsgs = await Message.find();
    return json({messages : allMsgs});
  }catch (err) {
    return json({ message: err, success: false });
  }



};

const saveMsgInDB = async (req, res) => {
  const { role, content, threadId } = req.body;

  if (!role || content || !threadId) {
    return res
      .status(400).json({ message: "Error : Can't save message", success: false });
  }

  try {
    const msg = new Message({
      role: role,
      content: content,
      threadId: threadId,
      createdAt: Date.now(),
    });
    const savedMsg = await msg.save();
    return res
      .status(500)
      .json({
        message: "Message saved successfully",
        success: true,
        message: savedMsg,
      });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};

const getGeminiResponse = async (req, res) => {
  const { prompt } = req.body;
  const gemini_api_key = process.env.GEMINI_API_KEY;
  const googleAI = new GoogleGenerativeAI(gemini_api_key);
  const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
  };

  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    geminiConfig,
  });

  try {
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    return res.status(200).json({ response: response.text(), success: true });
  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};

export default {
  getAllMsg,
  getGeminiResponse,
  saveMsgInDB,
};
