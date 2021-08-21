import axios from "axios";

const API_KEY = "f49aed4633c5715d1f0b5c3fb2c82c78";

function getCurrentWeather(location) {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
  );
}

export {
  getCurrentWeather
}