import express from 'express';
import * as path from 'path';

import {ContragentController} from './controllers/contragent/';

const app: express.Application = express();

app.set('view engine', 'html');

app.use('/contragent', ContragentController);

export default app;