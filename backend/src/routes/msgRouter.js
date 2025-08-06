import {Router} from "express";
import messageController from "../controllers/messageController.js";

const msgRouter = Router();

msgRouter.route("/getAllMsg").get(messageController.getAllMsg);
msgRouter.route("/saveMsg").post(messageController.saveMsgInDB);
msgRouter.route("/getGeminiResponse").get(messageController.getGeminiResponse);


export default msgRouter;

