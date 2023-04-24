import { useState } from 'react';
import processCurrentWeatherData from './utils/processCurrentWeatherData';
import processForecastData from './utils/processForecastData';
import processLocationData from './utils/processLocationData';
import './style.css';

function App() {
  const [counter, setCounter] = useState(0);

  async function requestWeatherData() {
    const url = 'https://api.weatherapi.com/v1/forecast.json';
    const key = '3a1962b5b4fa48eab9012505231004';
    try {
      const response = await fetch(`${url}?key=${key}&q=chicago`);
      const data = await response.json();

      processCurrentWeatherData(data.current);
      processForecastData(data.forecast.forecastday[0]);
      processLocationData(data.location);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
      <p>The count is: {counter}</p>
      <br></br>
      <button onClick={requestWeatherData}>Get Chicago weather forecast</button>
    </>
  );
}

export default App;
