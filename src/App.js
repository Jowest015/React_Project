import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const weather = [
    { id: 1, city: "Houston", current: "Sunny", temp: "79", hum: "15", wndspd: "15 knts"}
  ]
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

function Dashboard({ weather }) {
  return (
    <ul>
      {weather.map((weather) => (
        <li key={weather.id}>
          {weather.city}
          <br />
          {weather.current}
          <br />
          {weather.temp}
          <br />
          {weather.hum}
          <br />
          {weather.wndspd}
          </li>
      ))}
    </ul>
  )
}

function CloseUp() {
  return (
    <div>
      <h1>Day-Cast</h1>
    </div>
  );
}

function Current() {
  return (
    <div>
      <h1>Current Weather</h1>
    </div>
  );
}