import {Router} from "express";
import threadController from "../controllers/threadController.js";

const threadRouter = Router();


threadRouter.route("/save").post(threadController.saveThread);
threadRouter.route("/getAllThread").get(threadController.getAllThread);
threadRouter.route("/deleteThread").get(threadController.deleteThread);

export default threadRouter;
