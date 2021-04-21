import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../repositories/SettingsRepositories";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) { 
      const settingsRepository = getCustomRepository(SettingsRepositories);

      const settingAlreadyExist = await settingsRepository.findOne({ username });
      
      if(settingAlreadyExist) throw new Error(`User ${username} Already Exist!`);
    
      const settings = settingsRepository.create({
        chat,
        username
      });
    
      await settingsRepository.save(settings);    

      return settings;
  }
}

export { SettingsService };