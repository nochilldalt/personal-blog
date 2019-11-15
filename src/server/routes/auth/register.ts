import * as express from "express";
import { createToken } from "../../utils/security/tokens";
import { hashPassword } from "../../utils/security/passwords";
import db from "../../db";

const router = express.Router();

router.post("/", async (req: any, res) => {
  try {
    req.body.password = hashPassword(req.body.password);
    let result: any = await db.users.register(
      req.body.name,
      req.body.email,
      req.body.password
    );
    let token = await createToken({ userid: result.insertId });
    res.json({
      token,
      userid: result.insertId,
      role: "guest"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("My Code Sucks Let Me Know ");
  }
});

export default router;
