import * as express from 'express';
import db from '../../db'

const router = express.Router();

router.get('/:id', async(req, res) =>{
    try {
        const id = req.params.id
        const blogtags: any = await db.blogtags.getForBlog(id)
        res.json(blogtags[0])
    } catch (error) {
        console.log(error)
        res.status(500).json("My Code Sucks Let Me Know ");
    }
})

export default router;