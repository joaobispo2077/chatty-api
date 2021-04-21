import { NextFunction, Request, Response } from "express";
import { MessagesService } from "../services/MessagesSerivce";

class MessagesController {
  async create(req: Request, res: Response, next: NextFunction){
    const { text, user_id, admin_id } = req.body;

    const messageService = new MessagesService();

    const message = await messageService.create({
      text,
      user_id,
      admin_id
    })
  }
}

export { MessagesController };
