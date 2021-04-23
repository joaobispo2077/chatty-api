import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepositories } from "../repositories/SettingsRepositories";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepositories);
  }

  async create({ chat, username }: ISettingsCreate) { 
      const settingAlreadyExist = await this.settingsRepository.findOne({ username });
      
      if(settingAlreadyExist) throw new Error(`User ${username} Already Exist!`);
    
      const settings = this.settingsRepository.create({
        chat,
        username
      });
    
      await this.settingsRepository.save(settings);    

      return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({ username });

    return settings;
  }

  async updateChatByUsername(username: string, chat: boolean) {
    const settings = await this.settingsRepository
    .createQueryBuilder().update(Setting)
    .set({chat})
    .where("username = :username", {
      username
    })
    .execute();
  }
}

export { SettingsService };