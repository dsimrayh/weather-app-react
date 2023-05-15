import Location from './Location';
import CurrentWeatherData from './CurrentWeatherData';
import AdditionalWeatherDataTile from './AdditionalWeatherDataTile';
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
    </>
  );
}
