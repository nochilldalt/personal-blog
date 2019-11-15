import * as passport from 'passport'
import * as BearerStrategy from 'passport-http-bearer'
import db from '../db';
import { validateToken } from '../utils/security/tokens';

passport.use(new BearerStrategy.Strategy(async(token, done)=>{
    try {
        let payload:any = await validateToken(token)
        let[user]:any = await db.users.findid(payload.userid)
        if (user) {
            delete user.password
            done(null, user)
        } else {
            done(null, false)
        }
    } catch (error) {
        done(error)
    }
}))
