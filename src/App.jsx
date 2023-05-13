import { useState, useEffect } from 'react';
import requestWeatherData from './api/requestWeatherData';
import processWeatherData from './utils/processWeatherData';
import PrimaryWeatherData from './components/PrimaryWeatherData';
import AdditionalWeatherData from './components/AdditionalWeatherData';
import logo from './assets/logo.png';
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

  // Clear search input after successful search
  useEffect(() => {
    setSearchValue('');
  }, [weather]);

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
      const weatherData = await requestWeatherData(location);
      const cleanedWeatherData = processWeatherData(weatherData);
      setWeather(cleanedWeatherData);
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <>
      <header>
        <div id="logo">
          <img id="logo-img" src={logo} alt="logo-image"></img>
          <h1>WeatherSpot</h1>
        </div>
        <div id="search-input">
          <form onSubmit={handleSubmitForm}>
            <label htmlFor="search">Location:</label>
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
      </header>
      <main>
        {weather ? (
          <>
            <PrimaryWeatherData weather={weather} />
            <AdditionalWeatherData weather={weather} />
          </>
        ) : (
          <p>No data</p>
        )}
      </main>
    </>
  );
}

export default App;
