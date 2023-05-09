export default async function requestWeatherData(location) {
  const url = 'https://api.weatherapi.com/v1/forecast.json';
  const key = import.meta.env.VITE_API_KEY;
  try {
    const response = await fetch(`${url}?key=${key}&q=${location}`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
