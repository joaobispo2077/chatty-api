import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../repositories/SettingsRepositories";

class SettingsController {
  async create(req: Request, res: Response, next: NextFunction) {
    try{
      const { chat, username } = req.body;
    
      const settingsRepository = getCustomRepository(SettingsRepositories);
    
      const settings = settingsRepository.create({
        chat,
        username
      });
    
      await settingsRepository.save(settings);
    
      return res.status(201).json(settings);
  
    }catch(err){
      return res.status(500).json({ error: err.message});
    }
  }
}

export { SettingsController };