import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CloseUp from "./components/Close-up";
import Current from "./components/Current";
import Dashboard from "./components/Dashboard";

export default function App() {
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
  return (
    <Router>
      <div className="App">
        <h1>Weather Dashboard</h1>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/close-up">Day-Cast</Link>
          </li>
          <li>
            <Link to="/current">Current Weather</Link>
          </li>
        </ul>
        <hr />
        <Dashboard weather={weather} />

        <Switch>
          {/* <Route exact path="/">
            <Dashboard />
          </Route> */}
          <Route path="/close-up">
            <CloseUp />
          </Route>
          <Route path="/current">
            <Current />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

