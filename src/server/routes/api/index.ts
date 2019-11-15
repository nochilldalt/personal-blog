import * as express from "express";
import * as passport from "passport";
import blogroutes from "./blogs";
import tagroutes from "./tags";
import blogtagsroutes from "./blogtags";
import userroutes from "./user"

const router = express.Router();

router.use((req, res, next)=>{
    passport.authenticate('bearer', (error, user)=> {
        if(user){
            req.user=user
        }
        return next()
    })(req, res, next)
})
router.use("/blogs", blogroutes);
router.use("/tags", tagroutes);
router.use("/blogtags", blogtagsroutes);
router.use("/user", userroutes)

export default router;
