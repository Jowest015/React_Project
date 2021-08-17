import deepcopy from "deepcopy";


var initialState = {
  currentWeather: [
    {temp: "78"},
    {humidity: "85"}
  ]

}

function weather_reducer (state, action) {
  if (state === undefined) {
    return initialState;
  }


  console.log(action);
  let new_state = deepcopy(state);
  if (action.type === 'SEARCH') {
    new_state.currentWeather.push({temp: action.data.temp});
  }

  return new_state;

}

export default weather_reducer;