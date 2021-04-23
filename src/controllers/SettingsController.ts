import { NextFunction, Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response, next: NextFunction): Promise<Response>{
    try{
      const { chat, username } = req.body;
    
      const settingsService = new SettingsService();

      const settings = await settingsService.create({ chat, username});
    
      return res.status(201).json(settings);  
    }catch(err){
      return res.status(400).json({ error: err.message});
    }
  }

  async findByUsername(req: Request, res: Response, next: NextFunction) {
    const {  username } = req.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return res.status(200).json(settings);
  }
}

export { SettingsController };