import express from 'express';
import http from 'http';
import socketio, { Socket } from 'socket.io';
import { resolve } from 'path';
import routes from './routes';

const app = express();
app.use(routes);
app.use(express.static(resolve(__dirname, '..', 'public')));
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket: Socket) => {
  console.log(`Cliente ${socket.id} conectado.`);
  socket.on('position', position => {
    console.log(`Cliente ${socket.id} fez uma jogada na posição ${position}`);
  });
});

export { server, io };
