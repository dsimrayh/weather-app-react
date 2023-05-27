import AdditionalWeatherDataTile from './AdditionalWeatherDataTile';
import { additionalWeatherDataObject } from '../data/additionalWeatherDataObject';

export default function AdditionalWeatherData({ weather, tempUnits }) {
  const additionalWeatherDataTiles = additionalWeatherDataObject.map(
    (dataPoint) => {
      return (
        <AdditionalWeatherDataTile
          key={dataPoint.id}
          data={dataPoint}
          weather={weather}
          tempUnits={tempUnits}
        />
      );
    }
  );

  return <div id="additional-weather-data">{additionalWeatherDataTiles}</div>;
}
