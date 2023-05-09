export default function PrimaryWeatherData({ weather }) {
  return (
    <>
      <p>{`${weather.location.name}, ${weather.location.region}`}</p>
      <p>{weather.location.country}</p>
      <p>
        {weather.current.temp_f}º / {weather.current.condition}
      </p>
      <p>
        High: {weather.forecast.maxtemp_f}º Low: {weather.forecast.mintemp_f}º
      </p>
      <p>Local time:</p>
      <p>{weather.location.localtime}</p>
    </>
  );
}
