import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('*', (req: Request, res: Response) => {
    res.render('index/index.html');
});

export const IndexController: Router = router;