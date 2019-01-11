import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('*', (req: Request, res: Response) => {
    res.render('./contragent/index.html');
});

export const ContragentController: Router = router;