import * as express from "express";
import apiroutes from "./api";
import authroutes from "./auth";

const router = express.Router();

router.use("/api", apiroutes);
router.use("/auth", authroutes);

export default router;