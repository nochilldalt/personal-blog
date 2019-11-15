import * as express from 'express';
import * as passport from 'passport'
import { createToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', passport.authenticate('local') ,async(req:any, res) =>{
    try {
        let token = await createToken({userid:req.user.id})
        res.json({
            token,
            userid: req.user.id,
            role: req.user.role
        })
    } catch (error) {
        console.log(error)
        res.status(500).json("My Code Sucks Let Me Know ");
    }
})

export default router;