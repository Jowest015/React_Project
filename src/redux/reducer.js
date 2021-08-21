import deepcopy from "deepcopy";

var initialState = {
  weatherData: []
};

const weatherReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  console.log(action);
  let new_state = deepcopy(state);

  if (action.type === "SUBMIT_WEATHER_DATA") {
    new_state.weatherData.push({
      name: action.data.name,
      temp: action.data.temp,
      description: action.data.description,
      humidity: action.data.humidity,
      windspd: action.data.windspd
    });
  }
  return new_state;
};

export default weatherReducer;
