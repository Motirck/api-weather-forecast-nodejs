import { Router } from 'express';
import { WeatherForecastController } from './controllers/WeatherForecastController';

const router = Router();

const weatherForecastController = new WeatherForecastController();

router.get('/forecast/:city/:state/:country', weatherForecastController.handle);

export { router };