import express from 'express';
import exjwt from 'express-jwt';
import nunjucks from 'nunjucks';
import * as path from 'path';

import { Request, Response } from 'express';
import { NextFunction } from 'connect';

import { IndexController } from './controllers/index/';

import { AuthAPI } from './api/auth';
import { StarshipsAPI } from './api/starships';

import './util/logger'

const app: express.Application = express();

nunjucks.configure(path.join(__dirname, '../views/'), {
    express: app,
    autoescape: true
});
app.use(express.static(path.join(__dirname, '../views/index')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use(express.json());

/* 
 * By default exjwt get token from headers
 * Key: Authorization
 * Value: `Bearer ${token}`
 */
const jwtMW = exjwt({
    secret: 'Privet!'
});

/* 
 * Logs settings
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});


app.use('*', IndexController);

app.use('/api', AuthAPI);
app.use('/api/starships', jwtMW, StarshipsAPI);

export default app;