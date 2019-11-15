import * as express from 'express';
import db from '../../db'

const router = express.Router();

router.get('/', async(req, res) =>{
    try {
        const tags = await db.tags.all()
        res.json(tags)
    } catch (error) {
        console.log(error)
        res.status(500).json("My Code Sucks Let Me Know ");
    }
})

export default router;