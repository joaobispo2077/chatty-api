import { NextFunction, Request, Response } from "express";
import { MessagesService } from "../services/MessagesSerivce";

class MessagesController {
  async create(req: Request, res: Response, next: NextFunction){
    try{
      const { text, user_id, admin_id } = req.body;
  
      const messageService = new MessagesService();
  
      const message = await messageService.create({
        text,
        user_id,
        admin_id
      });

      return res.status(201).json(message);
    }catch(err){
      return res.status(500).json({error: err.message});
    }
  }
  async showByUser(req: Request, res: Response, next: NextFunction){
    try{
      const { user_id } = req.params;
      console.log(user_id)
      const messageService = new MessagesService();
  
      const messages = await messageService.listByUser(user_id);

      return res.status(200).json(messages);
    }catch(err){
      return res.status(500).json({error: err.message});
    }
  }
}

export { MessagesController };
