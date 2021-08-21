import React from 'react';

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { weatherData: state.weatherData };
};


const CurrentWeather = ({ weatherData }) => (
  <ul>
    {weatherData.map(weather =>(
      <div key={weather.id} className="weather_output">
        <p>{weather.name}</p>
        <p>{weather.temp}</p>
        <p>{weather.description}</p>
        <p>{weather.humidity}</p>
        <p>{weather.windspd}</p>
      </div>
    ))}
  </ul>
)


const ConnectedWeather = connect(mapStateToProps)(CurrentWeather);

export default ConnectedWeather;