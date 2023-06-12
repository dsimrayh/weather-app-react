import { useState, useEffect } from 'react';
import requestWeatherData from './api/requestWeatherData';
import processWeatherData from './utils/processWeatherData';
import updateBackgoundImage from './utils/updateBackgroundImage';
import SearchInput from './components/SearchInput';
import Weather from './components/Weather';
import logo from './assets/logo.png';
import './style.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(false);
  const [tempUnits, setTempUnits] = useState('F');

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

  async function getWeather(location) {
    try {
      const weatherData = await requestWeatherData(location);
      const cleanedWeatherData = processWeatherData(weatherData);
      setWeather(cleanedWeatherData);
      updateBackgoundImage(cleanedWeatherData);
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
        <SearchInput
          getWeather={getWeather}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          error={error}
        />
      </header>
      <main>
        {weather ? (
          <Weather
            weather={weather}
            tempUnits={tempUnits}
            setTempUnits={setTempUnits}
          />
        ) : (
          <p>No data</p>
        )}
      </main>
    </>
  );
}

export default App;
