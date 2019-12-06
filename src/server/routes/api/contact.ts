import * as express from 'express';
import sendEmail from '../../utils/mailgun'

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        await sendEmail('dfree1716@gmail.com', 'noreply@test.com', 'hey there', req.body.message);
        res.json('Email Sent')
    } catch (e) {
        console.log(e)
        res.status(500)
    }

});

export default router;