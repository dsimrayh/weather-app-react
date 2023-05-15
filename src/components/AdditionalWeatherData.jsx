// Precipitation is rain only right now

export default function AdditionalWeatherData({ weather, tempUnits }) {
  return (
    <div id="additional-weather-data">
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Feels like</p>
        <p className="additional-weather-tile-content">
          {tempUnits === 'F'
            ? `${weather.current.feelslike_f}º`
            : `${weather.current.feelslike_c}º`}
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Wind speed</p>
        <p className="additional-weather-tile-content">
          {tempUnits === 'F'
            ? `${weather.current.wind_mph} mph`
            : `${weather.current.wind_kph} kph`}
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Wind direction</p>
        <p className="additional-weather-tile-content">
          {weather.current.wind_dir}
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Precipitation chance</p>
        <p className="additional-weather-tile-content">
          {weather.forecast.daily_chance_of_rain}%
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Total precipitation</p>
        <p className="additional-weather-tile-content">
          {tempUnits === 'F'
            ? `${weather.forecast.totalprecip_in} in`
            : `${weather.forecast.totalprecip_mm} mm`}
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Humidity</p>
        <p className="additional-weather-tile-content">
          {weather.current.humidity}%
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Pressure</p>
        <p className="additional-weather-tile-content">
          {tempUnits === 'F'
            ? `${weather.current.pressure_in} in`
            : `${weather.current.pressure_mb} mb`}
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">UV</p>
        <p className="additional-weather-tile-content">{weather.current.uv}</p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Visibility</p>
        <p className="additional-weather-tile-content">
          {tempUnits === 'F'
            ? `${weather.current.vis_miles} mi`
            : `${weather.current.vis_km} km`}
        </p>
      </div>
      <div className="additional-weather-tile">
        <p className="additional-weather-tile-title">Cloud cover</p>
        <p className="additional-weather-tile-content">
          {weather.current.cloud}%
        </p>
      </div>
    </div>
  );
}
