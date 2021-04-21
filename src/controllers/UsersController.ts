import { NextFunction, Request, Response } from "express";
import { UsersService } from "../services/UsersService";


class UsersController {
  async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try{
      const { email } = req.body;

      const usersService = new UsersService();

      const user = await usersService.create(email);

      return res.status(201).json(user);  
    }catch(err){
      return res.status(400).json({ error: err.message});
    }
  }
 }


 export { UsersController };