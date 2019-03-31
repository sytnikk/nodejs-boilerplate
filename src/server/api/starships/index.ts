import { Router, Request, Response } from 'express';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        let b = 'test'
        console.log('Hello')
    } catch (error) {
        console.error(error);
    }
});

export const StarshipsAPI: Router = router;