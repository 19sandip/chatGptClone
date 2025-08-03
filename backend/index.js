import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "node:http";

dotenv.config();

const port = process.env.PORT || 2025;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = createServer(app);


const start = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("database connected");
  server.listen(port, () => {
    console.log(`server is running on the port: ${port}`);
  });
};

start();
