import { format } from 'date-fns';

export default function HourlyForecastTile({ hourData }) {
  return (
    <div className="hourly-forecast-tile">
      <p>{format(new Date(hourData.time), 'p')}</p>
      <p>{hourData.condition.text}</p>
      <p>{hourData.temp_f}º</p>
      <p></p>
    </div>
  );
}
