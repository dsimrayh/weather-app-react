import { weatherCodeBackgroundObject } from '../data/weatherCodeBackgroundObject';

export default function updateBackgoundImage(cleanedWatherData) {
  const weatherConditionCode = cleanedWatherData.current.code;
  const isItNight = !cleanedWatherData.current.is_day;

  if (isItNight) {
    document.body.style.backgroundImage = `url(../src/assets/background-images/night.jpg)`;
    return;
  }

  const backgroundImageName = weatherCodeBackgroundObject[weatherConditionCode];
  const backgroundImageURL = `../src/assets/background-images/${backgroundImageName}.jpg`;
  document.body.style.backgroundImage = `url(${backgroundImageURL})`;
}
