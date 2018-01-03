import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    renderWeather(cityData) {
        let temps = cityData.list.map(weather => weather.main.temp);
        let pressures = cityData.list.map(weather => weather.main.pressure);
        let humidities = cityData.list.map(weather => weather.main.humidity);
        let lat = cityData.city.coord.lat;
        let long = cityData.city.coord.lon;

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} long={long} /></td>
                <td><Chart height={100} width={150} color="orange" data={temps} units="K" /></td>
                <td><Chart height={100} width={150} color="green" data={pressures} units="hPa" /></td>
                <td><Chart height={100} width={150} color="black" data={humidities} units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        weather: state.weather
    })
}

export default connect(mapStateToProps)(WeatherList);