// Precipitation is rain only right now

export default function AdditionalWeatherData({ weather }) {
  return (
    <div id="additional-weather-data">
      <p> Feels like: {weather.current.feelslike_f}º</p>
      <p> Wind speed: {weather.current.wind_mph} mph</p>
      <p> Wind direction: {weather.current.wind_dir}</p>
      <p> Chance of precipitation: {weather.forecast.daily_chance_of_rain}%</p>
      <p> Total precipitation {weather.forecast.totalprecip_in} in</p>
      <p> Humidity {weather.current.humidity}%</p>
      <p> Pressure: {weather.current.pressure_in} in</p>
      <p> UV: {weather.current.uv}</p>
      <p> Visibility {weather.current.vis_miles} mi</p>
      <p> Cloud cover: {weather.current.cloud}%</p>
    </div>
  );
}
