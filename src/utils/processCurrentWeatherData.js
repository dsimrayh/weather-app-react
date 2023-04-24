export default function processCurrentWeatherData(data) {
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

  console.log({
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
  });
}
