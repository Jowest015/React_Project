import React from 'react';

class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="current-weather">
        <div className="current-weather_content">
          <p className="current-weather_temp">78</p>
          <p className="current-weather_descriptor">Clear</p>
          {/* <img className="current-weather_item" url "" /> */}
        </div>
        <div>
          <p className="current-weather_humidity">85</p>
        </div>
      </div>
    )
  }
}

export default function Current() {
  return (
    <div>
      <CurrentWeather />
    </div>
  );
}