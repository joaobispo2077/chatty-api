import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepositories } from './repositories/SettingsRepositories';

const routes = Router();

routes.post('/settings', async (req, res, next)=> {
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
});

routes.get('/', (req, res, next) => {
  return res.json({ message: 'Hello chatty api!' });
});

routes.post("/user", (req, res, next) => {
  return res.json({ message: 'created user with success.' })
});

export { routes };