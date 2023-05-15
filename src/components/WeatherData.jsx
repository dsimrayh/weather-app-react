import Location from './Location';
import CurrentWeather from './CurrrentWeather';
import AdditionalWeatherData from './AdditionalWeatherData';

export default function WeatherData({ weather, tempUnits, setTempUnits }) {
  return (
    <>
      <div id="primary-weather-data">
        <Location weather={weather} />
        <CurrentWeather
          weather={weather}
          tempUnits={tempUnits}
          setTempUnits={setTempUnits}
        />
      </div>
      <div id="additional-weather-data">
        <AdditionalWeatherData weather={weather} tempUnits={tempUnits} />
      </div>
    </>
  );
}
