import { createStore } from "redux";

import weather_reducer from "./reducer";

var store = createStore(weather_reducer);

export default store;