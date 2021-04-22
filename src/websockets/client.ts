import { io } from '../http';

import { ConnectionsService } from '../services/ConnectionsService';
import { UsersService } from '../services/UsersService';
import { MessagesService } from '../services/MessagesService';

io.on('connect',  (socket) => {
  const connectionSerivce = new ConnectionsService();
  const usersSerivce = new UsersService();
  const messagesService = new MessagesService();

  
  socket.on('client_first_access', async  params => {
    const socket_id = socket.id;
    let user_id = null;


    const { text, email } = params;

    const usersExists = await usersSerivce.findByEmail(email);

    if(!usersExists) {
      const user = await usersSerivce.create(email);

      await connectionSerivce.create({
        socket_id, user_id: user.id 
      });

      user_id = user.id;
    } else {
      user_id = usersExists.id;
      
      const connection = await connectionSerivce.findByUserId(usersExists.id);

      if(!connection) {
        await connectionSerivce.create({
          socket_id, user_id: usersExists.id  
        });
      } else {
        connection.socket_id = socket_id;
        await connectionSerivce.create(connection);
      }
    }

    await messagesService.create({
      text,
      user_id
    })


  });
});