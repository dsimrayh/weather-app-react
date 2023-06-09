import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunset.png';

export default function CurrentWeatherData({
  weather,
  tempUnits,
  setTempUnits,
}) {
  return (
    <>
      <div id="current-weather">
        <div id="current-weather-condition">
          <p id="condition-text">{weather.current.condition}</p>
          <img
            id="condition-img"
            src={weather.current.icon}
            alt="condition-img"
          ></img>
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
      </div>
      <div id="hi-low-sunrise-sunset">
        <p id="current-weather-hi-low">
          {tempUnits === 'F'
            ? `H: ${weather.forecast.maxtemp_f}º L: ${weather.forecast.mintemp_f}º`
            : `H: ${weather.forecast.maxtemp_c}º L: ${weather.forecast.mintemp_c}º`}
        </p>
        <div id="sunrise">
          <img
            className="sunrise-sunset-img"
            src={sunrise}
            alt="Sunrise: "
          ></img>
          <p>{weather.forecast.sunrise}</p>
        </div>
        <div id="sunset">
          <img className="sunrise-sunset-img" src={sunset} alt="Sunset: "></img>
          <p>{weather.forecast.sunset}</p>
        </div>
      </div>
    </>
  );
}
