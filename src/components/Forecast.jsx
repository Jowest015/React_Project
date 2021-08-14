export default function Forecast({ weather }) {
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