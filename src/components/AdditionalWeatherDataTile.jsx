export default function AdditionalWeatherDataTile({
  data,
  weather,
  tempUnits,
}) {
  let value = weather[data.category][data.content];
  let unit = data.unit ?? '';

  if (data.unitsCanChange) {
    value = weather[data.category][data[`content${tempUnits}`]['path']];
    unit = data[`content${tempUnits}`]['unit'];
  }

  return (
    <div className="additional-weather-tile">
      <p className="additional-weather-tile-title">{data.title}</p>
      <p className="additional-weather-tile-content">
        {value}
        {unit}
      </p>
    </div>
  );
}
