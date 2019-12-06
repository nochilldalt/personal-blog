import * as express from 'express';
import charge from '../../utils/stripe'

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount )
        console.log(data)
        res.json('Thanks for the money dumbass im gonna spend it on drugs')
    } catch (e) {
        console.log(e)
        res.status(500)
    }

});

export default router;