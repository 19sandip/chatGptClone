import {router} from "express";
import userController from "../controllers/userController.js";


router.route("/v1/register").post(userController.register);
router.route("/v1/login").post(userController.login);

export default router;



