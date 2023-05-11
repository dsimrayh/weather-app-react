import { useState, useEffect } from 'react';
import requestWeatherData from './api/requestWeatherData';
import processWeatherData from './utils/processWeatherData';
import PrimaryWeatherData from './components/PrimaryWeatherData';
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
      await getWeather(searchValue);
    } catch (err) {
      console.log(err);
    }
  }

  async function getWeather(location) {
    try {
      const data = await requestWeatherData(location);
      const weatherData = processWeatherData(data);
      setWeather(weatherData);
      setSearchValue('');
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <>
      <header>
        <h1>Weather</h1>
      </header>
      <main>
        <div id="search-input">
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
        </div>
        {weather ? <PrimaryWeatherData weather={weather} /> : <p>No data</p>}
      </main>
    </>
  );
}

export default App;
