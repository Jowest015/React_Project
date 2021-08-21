import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Current from "./components/Current";
import store from "./redux/store";
import ConnectedWeather from "./components/SearchBar";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/current">Current Weather</Link>
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
    </Provider>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ConnectedWeather />
    </div>
  )
}

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

export default App;