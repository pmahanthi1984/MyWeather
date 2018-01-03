import { combineReducers } from 'redux';
import WeatherReducer from './reducer-weather';

export default combineReducers({
  weather: WeatherReducer
});
