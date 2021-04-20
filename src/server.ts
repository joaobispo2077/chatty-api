import express from  'express';

import {routes} from './routes';

import './database';

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => console.log(`server is running at port ${port}`));