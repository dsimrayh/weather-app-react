import { useState } from 'react';
import './style.css';

function App() {
  const [counter, setCounter] = useState(0);

  async function requestWeatherForecast() {
    const url = 'https://api.weatherapi.com/v1/forecast.json';
    const key = '3a1962b5b4fa48eab9012505231004';
    try {
      const response = await fetch(`${url}?key=${key}&q=chicago`);
      const data = await response.json();
      processWeatherData(data.current, data.forecast, data.location);
    } catch (err) {
      console.error(err);
    }
  }

  function processWeatherData(currentWeather, forecast, locationData) {
    console.log(currentWeather);
    console.log(forecast);
    console.log(locationData);
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
      <p>The count is: {counter}</p>
      <br></br>
      <button onClick={requestWeatherForecast}>
        Get Chicago weather forecast
      </button>
    </>
  );
}

export default App;
