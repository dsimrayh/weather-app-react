export default function processForecastData(data) {
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
