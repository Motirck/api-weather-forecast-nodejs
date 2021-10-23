import axios from "axios";

const apiLatLong = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/',
});

const apiWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export { apiLatLong, apiWeather };