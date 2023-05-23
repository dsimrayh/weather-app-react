import Location from './Location';
import CurrentWeatherData from './CurrentWeatherData';
import AdditionalWeatherDataTile from './AdditionalWeatherDataTile';
import HourlyForecastTile from './HourlyForecastTile';
import { additionalWeatherData } from '../data/additionalWeatherData';

export default function Weather({ weather, tempUnits, setTempUnits }) {
  const additionalWeatherDataTiles = additionalWeatherData.map((dataPoint) => {
    return (
      <AdditionalWeatherDataTile
        key={dataPoint.id}
        data={dataPoint}
        weather={weather}
        tempUnits={tempUnits}
      />
    );
  });

  const hourlyForecastTiles = weather.forecast.hour.map((hour, idx) => {
    return <HourlyForecastTile key={idx} hourData={hour} />;
  });

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
      <div id="additional-weather-data">{additionalWeatherDataTiles}</div>
      <div id="hourly-forecast">{hourlyForecastTiles}</div>
    </>
  );
}
