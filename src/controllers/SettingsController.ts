import { NextFunction, Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response, next: NextFunction) {
    try{
      const { chat, username } = req.body;
    
      const settingsService = new SettingsService();

      const settings = await settingsService.create({ chat, username});
    
      return res.status(201).json(settings);  
    }catch(err){
      return res.status(400).json({ error: err.message});
    }
  }
}

export { SettingsController };