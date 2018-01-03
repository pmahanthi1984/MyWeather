import axios from 'axios';

const API_KEY = '7f813f7ed282eedf9daabffc2d3041fd';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    let url = `${API_URL}&q=${city},us`;
    let request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}