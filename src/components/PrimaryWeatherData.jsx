import { format } from 'date-fns';

export default function PrimaryWeatherData({ weather }) {
  return (
    <>
      <div id="location">
        <p id="location-city-region">{`${weather.location.name}, ${weather.location.region}`}</p>
        <p id="location-country">
          {weather.location.country === 'United States of America'
            ? 'USA'
            : weather.location.country}
        </p>
        <p id="location-date">
          {format(new Date(weather.location.localtime), 'PPPP')}
        </p>
        <p id="location-time">
          {format(new Date(weather.location.localtime), 'p')}
        </p>
      </div>
      <div id="current-weather">
        <p id="current-weather-condition">{weather.current.condition}</p>
        <p id="current-weather-temp">{weather.current.temp_f}º</p>
        <p id="current-weather-hi-low">
          H: {weather.forecast.maxtemp_f}º L: {weather.forecast.mintemp_f}º
        </p>
      </div>
    </>
  );
}
