

export default function App() {
  const weather = [
    { id: 1, city: "Houston", current: "Sunny", temp: "79", hum: "15", wndspd: "15 knts"}
  ]
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>

      <Dashboard weather={weather} />
    </div>
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
