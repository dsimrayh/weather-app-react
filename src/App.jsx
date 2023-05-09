import { useState } from 'react';
import requestWeatherData from './api/requestWeatherData';
import processWeatherData from './utils/processWeatherData';
import './style.css';

function App() {
  const [weather, setWeather] = useState({ location: '' });
  const [searchValue, setSearchValue] = useState('');

  async function handleSubmitForm(event) {
    event.preventDefault();
    if (!searchValue) return;
    try {
      const data = await requestWeatherData(searchValue);
      if (data) {
        const weatherData = processWeatherData(data);
        setWeather(weatherData);
      }
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
      <p>{`${weather.location.city}, ${weather.location.region}`}</p>
      <p>{weather.location.country}</p>
      <p>Local time:</p>
      <p>{weather.location.localtime}</p>
    </>
  );
}

export default App;
