import express from  'express';

import path from 'path';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import {routes} from './routes';

import './database';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set("views", path.join(__dirname, '..', 'public'));
app.engine("html", require('ejs').renderFile);
app.set("view engine", "html")

app.get('/pages/chat/client', (req, res) => {
  res.render('html/client.html');
});

app.get('/pages/chat/admin', (req, res) => {
  res.render('html/admin.html');
});

const http = createServer(app); // creating http protocol
const io = new Server(http); // creating websocket protocol

io.on("connection", (socket: Socket) => {
  console.log("conected...", socket.id);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

export { http, io };