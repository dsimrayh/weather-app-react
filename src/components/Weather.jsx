import Location from './Location';
import CurrentWeatherData from './CurrentWeatherData';
import AdditionalWeatherData from './AdditionalWeatherData';
import HourlyForecast from './HourlyForecast';

export default function Weather({ weather, tempUnits, setTempUnits }) {
  return (
    <>
      <div id="primary-weather-data">
        <Location weather={weather} />
        <CurrentWeatherData
          weather={weather}
          tempUnits={tempUnits}
          setTempUnits={setTempUnits}
        />
      </div>
      <AdditionalWeatherData weather={weather} tempUnits={tempUnits} />
      <HourlyForecast weather={weather} />
    </>
  );
}
