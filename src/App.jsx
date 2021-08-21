import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Current from "./components/Current";
import ConnectedWeather from "./components/SearchBar";


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Current Weather</Link>
          </li>
          <li>
            <Link to="/current">None</Link>
          </li>            
        </ul>
        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/current" component={Current} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ConnectedWeather/>
    </div>
  )
}

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

export default App;