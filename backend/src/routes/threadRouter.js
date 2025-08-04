import {router} from "express";
import threadController from "../controllers/threadController.js";

router.route("/save").post(threadController.saveThread);
router.route("/getAllThread").get(threadController.getAllThread);
router.route("/deleteThread").get(threadController.deleteThread);

export default router;
