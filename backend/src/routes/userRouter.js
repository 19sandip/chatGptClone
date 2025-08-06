import {Router} from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();
userRouter.route("/register").post(userController.register);
userRouter.route("/login").post(userController.login);

export default userRouter;



