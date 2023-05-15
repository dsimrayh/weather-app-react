import { format } from 'date-fns';

export default function Location({ weather }) {
  return (
    <div id="location">
      <p id="location-city-region">
        {weather.location.country === 'United States of America'
          ? `${weather.location.name}, ${weather.location.region}`
          : `${weather.location.name}`}
      </p>
      <p id="location-country">
        {weather.location.country === 'United States of America'
          ? 'USA'
          : weather.location.country}
      </p>
      <p id="location-date">
        {format(new Date(weather.location.localtime), 'PPPP')}
      </p>
      <p id="location-time">
        {format(new Date(weather.location.localtime), 'p')}
      </p>
    </div>
  );
}
