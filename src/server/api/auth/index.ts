import jwt from 'jsonwebtoken';

import { Router, Request, Response } from 'express';
import axios from 'axios';

const router: Router = Router();

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (username && password) return res.status(401).json({success: false, result: {}})

        const planets = await axios.get('https://swapi.co/api/planets/3/');
        console.log('Here')
        const userData = {
            name: 'Valdemar'
        };
        const token = jwt.sign({ userData }, 'Privet!', { expiresIn: 3888000 });

        return res.status(200).json({success: true, result: { token }})
    } catch (error) {
        console.error(error)
    } 
});

export const AuthAPI: Router = router;