import { useState, useEffect } from 'react';
import requestWeatherData from './api/requestWeatherData';
import processWeatherData from './utils/processWeatherData';
import './style.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(false);

  const DEFAULT_CITY = 'chicago';

  // Get default weather data on page load
  useEffect(() => {
    (async () => {
      getWeather(DEFAULT_CITY);
    })();
  }, []);

  async function handleSubmitForm(event) {
    event.preventDefault();
    if (!searchValue) return;
    try {
      getWeather(searchValue);
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  async function getWeather(location) {
    try {
      const data = await requestWeatherData(location);
      const weatherData = processWeatherData(data);
      setWeather(weatherData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="search">Enter location:</label>
        <input
          type="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <p id="error" className={error ? '' : 'hidden'}>
        Error: Location not found.
      </p>
      {weather ? (
        <>
          <p>{`${weather.location.name}, ${weather.location.region}`}</p>
          <p>{weather.location.country}</p>
          <p>Local time:</p>
          <p>{weather.location.localtime}</p>
        </>
      ) : (
        <p>No data</p>
      )}
    </>
  );
}

export default App;
