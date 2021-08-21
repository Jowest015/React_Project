import React from 'react';


function CurrentWeather() {

    return (
      <div className="current-weather">
        <div className="current-weather_content">
          <p className="current-weather_temp"></p>
          <p className="current-weather_description"></p>
          {/* <img className="current-weather_item" url "" /> */}
        </div>
        <div>
          <p className="current-weather_humidity"></p>
        </div>
      </div>
    )
}


export default CurrentWeather;