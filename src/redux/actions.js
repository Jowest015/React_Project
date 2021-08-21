export function fetchWeather (data) {
  console.log(data)
  
  return {
  type: 'FETCH_WEATHER',
  data: data
  
  }

}

export function submitWeatherData (weatherData) {

  const weatherObj = {
    name: weatherData.name,
    temp: weatherData.main.temp,
    description: weatherData.weather[0].main,
    humidity: weatherData.main.humidity,
    windspd: weatherData.wind.speed,
  };


  return{
    type: 'SUBMIT_WEATHER_DATA',
    data: weatherObj
  }
}
