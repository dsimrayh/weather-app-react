// Hits the weather API with location search and returns the data as a JSON object

export default async function requestWeatherData(location) {
  const URL = 'https://api.weatherapi.com/v1/forecast.json';
  const KEY = import.meta.env.VITE_API_KEY;
  try {
    const response = await fetch(`${URL}?key=${KEY}&q=${location}`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
