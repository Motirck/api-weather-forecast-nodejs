import { API_KEY } from '../consts/geo';
import { AddressForecast } from '../models/AddressForecast'
import { apiLatLong, apiWeather } from '../services/api'

class WeatherForecastService {
    async execute(address: AddressForecast) {
        const { city, state, country } = address;

        const latlong: any = await apiLatLong.get(`search?q=${city}&${state}&${country}&format=geojson`)
            .then((response) => {
                console.log("teste", response.data)
                return response.data
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        const longitude = latlong ? latlong.features[0].geometry.coordinates[0] : {};
        const latitude = latlong ? latlong.features[0].geometry.coordinates[1] : {};

        return apiWeather.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                console.error("Oops! Something wrong occurred" + err);
            });
    }
}

export { WeatherForecastService }