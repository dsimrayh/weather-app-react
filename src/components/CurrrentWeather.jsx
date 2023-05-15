export default function CurrentWeather({ weather, tempUnits, setTempUnits }) {
  return (
    <div id="current-weather">
      <div id="current-weather-condition">
        <p id="condition-text">{weather.current.condition}</p>
        <img id="condition-img" src={weather.current.icon}></img>
      </div>
      <p id="current-weather-temp">
        {tempUnits === 'F'
          ? `${weather.current.temp_f}º`
          : `${weather.current.temp_c}º`}
      </p>
      <p
        id="temp-units"
        onClick={() =>
          tempUnits === 'F' ? setTempUnits('C') : setTempUnits('F')
        }
      >
        <span className={tempUnits === 'F' ? '' : 'inactive'} id="f">
          ºF
        </span>
        <span> / </span>
        <span className={tempUnits === 'C' ? '' : 'inactive'} id="c">
          ºC
        </span>
      </p>
      <p id="current-weather-hi-low">
        {tempUnits === 'F'
          ? `H: ${weather.forecast.maxtemp_f}º L: ${weather.forecast.mintemp_f}º`
          : `H: ${weather.forecast.maxtemp_c}º L: ${weather.forecast.mintemp_c}º`}
      </p>
    </div>
  );
}
