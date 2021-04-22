import express from  'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import {routes} from './routes';

import './database';

const app = express();

const http = createServer(app); // creating http protocol
const io = new Server(http); // creating websocket protocol

io.on("connection", (socket: Socket) => {
  console.log("conected...", socket.id);
});

const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

http.listen(port, () => console.log(`server is running at port ${port}`));