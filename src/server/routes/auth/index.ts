import * as express from "express";
import loginRoutes from "./login";
import registerRoutes from "./register";

const router = express.Router();

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);

export default router;
