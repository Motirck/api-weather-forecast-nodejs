import { Request, Response } from 'express';
import { WeatherForecastService } from '../services/WeatherForecastService';

class WeatherForecastController {
    async handle(req: Request, res: Response) {
        const { city, state, country } = req.params;

        const weatherForecastController = new WeatherForecastService();

        const forecast = await weatherForecastController.execute({ city, state, country });

        return res.send(forecast);
    }
}

export { WeatherForecastController }