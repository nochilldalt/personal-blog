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

const isBlogOwner:RequestHandler = async (req:any, res, next)=>{
    const blog: any = await db.blogs.one(req.params.id);
  if (blog[0].userid === req.user.id) {
    return next()
  } else {
    return res.sendStatus(401)
  }
}

router.get('/user', isGuest, async (req:any, res) => {
  try {

    let blogs = await db.blogs.mine(req.user.id)
    res.json(blogs)
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
})


router.get("/",  async (req, res, next) => {
  try {
    const blogs = await db.blogs.all();
 
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.get("/:id", async (req, res, nevt) => {
  try {
    const blog: any = await db.blogs.one(req.params.id);
    res.json(blog[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.post("/", isGuest,async (req, res, next) => {
  try {
    const result: any = await db.blogs.post(
      req.body.title,
      req.body.content,
      req.body.userid
    );
    if (req.body.selectedTag === 0) {
      res.json(result);
    } else {
      await db.blogtags.insert(result.insertId, req.body.selectedTag);
      res.json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.put("/:id", isGuest, isBlogOwner, async (req, res, next) => {
  try {
    const edit = await db.blogs.edit(
      req.body.title,
      req.body.content,
      req.params.id
    );
    res.json(edit);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.delete("/:id", isGuest,isBlogOwner, async (req, res) => {
  const id = req.params.id;
  try {
    let removeTag = await db.blogtags.remove(id);
    let destroy = await db.blogs.destroy(id);
    res.json({destroy, removeTag});
  } catch (error) {
    console.log(error);
    res.status(500).json("My Code Sucks Let Me Know ");
  }
});


export default router;
