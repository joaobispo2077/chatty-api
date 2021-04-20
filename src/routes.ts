import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

routes.get('/', (req, res, next) => {
  return res.json({ message: 'Hello chatty api!' });
});

routes.post("/user", (req, res, next) => {
  return res.json({ message: 'created user with success.' })
});

export { routes };