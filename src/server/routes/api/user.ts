import * as express from "express";
import db from "../../db";
import { RequestHandler } from "express";

const router = express.Router();
const isGuest:RequestHandler = (req:any, res, next)=>{
    if (!req.user || req.user.role !=='guest') {
      return res.sendStatus(401)
    } else {
      return next()
    }
  }

router.get("/profile", isGuest, async (req:any, res, next) => {
  try {
    const user: any = await db.users.findid(req.user.id);
    delete user[0].password
    res.json(user[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

export default router;
