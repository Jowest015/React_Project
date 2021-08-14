import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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


  return (
    <Router>
      <div className="App">
        <AppBar position="relative">
          <Toolbar>
            <Box display="flex" width={'100%'} alignItems="center">
              <Box flexGrow={1}>
                <h1><Link to="/" style={{textDecoration:'none', color: 'white'}}>Weather App</Link></h1>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <ul>
          <li>
            <Link to="/close-up">Day-Cast</Link>
          </li>
          <li>
            <Link to="/current">Current Weather</Link>
          </li>
        </ul>
        <hr />
        

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/close-up" component={CloseUp} />
          <Route path="/current" component={Current} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Card>
      <CardContent>
        <Dashboard weather={weather} />
      </CardContent>
    </Card>
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