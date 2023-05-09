// processWeatherData() will take in the response from the API and return
// a cleaned up object containing only the relevant weather data.

export default function processWeatherData(weatherData) {
  const current = processCurrentWeatherData(weatherData.current);
  const forecast = processForecastData(weatherData.forecast.forecastday[0]);
  const location = processLocationData(weatherData.location);

  return { current, forecast, location };
}

function processCurrentWeatherData(data) {
  const {
    cloud,
    condition: { text: condition },
    feelslike_f,
    feelslike_c,
    humidity,
    pressure_in,
    pressure_mb,
    temp_f,
    temp_c,
    uv,
    vis_miles,
    vis_km,
    wind_dir,
    wind_mph,
    wind_kph,
  } = data;

  return {
    cloud,
    condition,
    feelslike_f,
    feelslike_c,
    humidity,
    pressure_in,
    pressure_mb,
    temp_f,
    temp_c,
    uv,
    vis_miles,
    vis_km,
    wind_dir,
    wind_mph,
    wind_kph,
  };
}

function processForecastData(data) {
  const {
    astro: { sunrise, sunset },
    day: {
      daily_chance_of_rain,
      daily_chance_of_snow,
      maxtemp_f,
      maxtemp_c,
      mintemp_f,
      mintemp_c,
      totalprecip_in,
      totalprecip_mm,
    },
  } = data;

  return {
    sunrise,
    sunset,
    daily_chance_of_rain,
    daily_chance_of_snow,
    maxtemp_f,
    maxtemp_c,
    mintemp_f,
    mintemp_c,
    totalprecip_in,
    totalprecip_mm,
  };
}

function processLocationData(data) {
  const { name, region, country, localtime } = data;

  return {
    name,
    region,
    country,
    localtime,
  };
}
