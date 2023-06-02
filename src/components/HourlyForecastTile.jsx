import { format } from 'date-fns';

export default function HourlyForecastTile({ hourData }) {
  return (
    <div className="hourly-forecast-tile">
      <p className="hourly-forecast-time">
        {format(new Date(hourData.time), 'p')}
      </p>
      <div className="hourly-forecast-condition">
        <p>{hourData.condition.text}</p>
        <img src={hourData.condition.icon} alt="condition-img"></img>
      </div>
      <p className="hourly-forecast-temp">{hourData.temp_f}º</p>
      <p></p>
    </div>
  );
}
