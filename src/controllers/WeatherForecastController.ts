import { Request, Response } from 'express';
import { ErrorsApi } from '../models/Error';
import { WeatherForecastService } from '../services/WeatherForecastService';

class WeatherForecastController {
    async handle(req: Request, res: Response) {
        const { city, state, country } = req.params;

        const weatherForecastController = new WeatherForecastService();

        try {
            const forecast = await weatherForecastController.execute({ city, state, country });
            return res.send(forecast);
        } catch (error) {
            const err = error as ErrorsApi
            return res.status(err.response.status).send(err);
        }

    }
}

export { WeatherForecastController }