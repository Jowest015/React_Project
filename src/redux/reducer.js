import deepcopy from "deepcopy";

var initialState = {
  weatherData: [
    { location: "Houston", temp: "85", humidity: "85", windspd: "5" },
  ],
};

const weatherReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  console.log(action);
  let new_state = deepcopy(state);
  if (action.type === "FETCH_WEATHER") {
    new_state.weatherData.push({
      location: action.data.location,
      temp: action.data.temp,
      humidity: action.data.humidity,
      windspd: action.data.windspd,
    });
  }
  if (action.type === "SUBMIT_WEATHER_DATA") {
    new_state.weatherData.push({
      location: action.data.location,
      temp: action.data.temp,
      humidity: action.data.humidity,
      windspd: action.data.windspd,
    });
  }
  return new_state;
};

export default weatherReducer;
