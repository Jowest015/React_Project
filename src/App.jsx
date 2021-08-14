import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Hourly from "./components/Hourly";


export default function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Forecast</Link>
          </li>
          <li>
            <Link to="/hourly">Hourly Forecast</Link>
          </li>
          <li>
            <Link to="/current">Current Weather</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/close-up" component={Hourly} />
          <Route path="/current" component={Current} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
        <Forecast weather={weather} />

  )
}

  const weather = [
    {
      id: 1,
      city: "Houston",
      current: "Sunny",
      temp: "99",
      hum: "15",
      wndspd: "15 knts",
    },
    {
      id: 2,
      city: "Houston",
      current: "Cloudy",
      temp: "98",
      hum: "20",
      wndspd: "10 knts",
    },
    {
      id: 3,
      city: "Houston",
      current: "Thunderstorms",
      temp: "89",
      hum: "25",
      wndspd: "35 knts",
    },
    {
      id: 4,
      city: "Houston",
      current: "Sunny",
      temp: "99",
      hum: "20",
      wndspd: "15 knts",
    },
    {
      id: 5,
      city: "Houston",
      current: "Sunny",
      temp: "103",
      hum: "10",
      wndspd: "10 knts",
    }
  ];