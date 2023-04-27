import { useState } from 'react';
import processCurrentWeatherData from './utils/processCurrentWeatherData';
import processForecastData from './utils/processForecastData';
import processLocationData from './utils/processLocationData';
import './style.css';

function App() {
  const [weather, setWeather] = useState({ location: '' });
  const [searchValue, setSearchValue] = useState('');

  async function requestWeatherData(query) {
    const url = 'https://api.weatherapi.com/v1/forecast.json';
    const key = '3a1962b5b4fa48eab9012505231004';
    try {
      const response = await fetch(`${url}?key=${key}&q=${query}`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();

      const current = processCurrentWeatherData(data.current);
      const forecast = processForecastData(data.forecast.forecastday[0]);
      const location = processLocationData(data.location);

      return { current, forecast, location };
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h1>Weather</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!searchValue) return;
          try {
            const weatherData = await requestWeatherData(searchValue);
            if (weatherData) setWeather(weatherData);
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <label htmlFor="search">Enter location:</label>
        <input
          type="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      {/* Time added as a visual way to confirm state is updating */}
      <p>{`${weather.location.city}, ${weather.location.region}`}</p>
      <p>{weather.location.country}</p>
      <p>Local time:</p>
      <p>{weather.location.localtime}</p>
    </>
  );
}

export default App;
