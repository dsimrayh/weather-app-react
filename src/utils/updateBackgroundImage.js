import { weatherCodeBackgroundObject } from '../data/weatherCodeBackgroundObject';

export default function updateBackgoundImage(weatherConditionCode) {
  const backgroundImageName = weatherCodeBackgroundObject[weatherConditionCode];
  const backgroundImageURL = `../src/assets/background-images/${backgroundImageName}.jpg`;
  document.body.style.backgroundImage = `url(${backgroundImageURL})`;
}
