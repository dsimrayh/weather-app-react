import { useState } from 'react';
import processCurrentWeatherData from './utils/processCurrentWeatherData';
import processForecastData from './utils/processForecastData';
import processLocationData from './utils/processLocationData';
import './style.css';

function App() {
  const [weather, setWeather] = useState({ location: '' });

  async function requestWeatherData() {
    const url = 'https://api.weatherapi.com/v1/forecast.json';
    const key = '3a1962b5b4fa48eab9012505231004';
    try {
      const response = await fetch(`${url}?key=${key}&q=chicago`);
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
      <button
        onClick={async () => {
          try {
            const weatherData = await requestWeatherData();
            setWeather(weatherData);
          } catch (err) {
            console.error(err);
          }
        }}
      >
        Get Chicago weather forecast
      </button>
      {/* Time added as a visual way to confirm state is updating */}
      <p>Local time:</p>
      <p>{weather.location.localtime}</p>
    </>
  );
}

export default App;
