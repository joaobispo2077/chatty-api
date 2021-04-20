import express from  'express';

import './database';

const app = express();

const port = 3333;

app.get('/', (req, res, next) => {
  return res.json({ message: 'Hello chatty api!' });
});

app.post("/user", (req, res, next) => {
  return res.json({ message: 'created user with success.' })
});

app.listen(port, () => console.log(`server is running at port ${port}`));