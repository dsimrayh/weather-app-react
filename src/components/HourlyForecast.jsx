import { useState, useEffect } from 'react';
import HourlyForecastTile from './HourlyForecastTile';

export default function HourlyForecast({ weather, tempUnits }) {
  // the hourly forecast section will only display 8 hrs at a time.
  // this state variable is used to track which "group" of 8 hours
  // should be dispalyed
  const [dailyForecastHourGroup, setDailyForecastHourGroup] = useState(1);

  useEffect(() => {
    setDailyForecastHourGroup(1);
  }, [weather]);

  // gives the start and end indexes for each hour group within
  // the 24 hour array
  const hourGroupIndexes = {
    1: [0, 8],
    2: [8, 16],
    3: [16, 24],
  };

  // returns a slice of the 24 hour array containing only the data
  // for the 8 hours currently selected
  const hourGroup = weather.forecast.hour.slice(
    hourGroupIndexes[dailyForecastHourGroup][0],
    hourGroupIndexes[dailyForecastHourGroup][1]
  );

  const hourlyForecastTiles = hourGroup.map((hour, idx) => {
    return (
      <li key={idx}>
        <HourlyForecastTile tempUnits={tempUnits} hourData={hour} />
      </li>
    );
  });

  function handleLeftBtnClick() {
    if (dailyForecastHourGroup === 1) return;
    setDailyForecastHourGroup((group) => group - 1);
  }

  function handleRightBtnClick() {
    if (dailyForecastHourGroup === 3) return;
    setDailyForecastHourGroup((group) => group + 1);
  }

  return (
    <div id="hourly-forecast">
      <ul id="hourly-forecast-tile-list">{hourlyForecastTiles}</ul>
      <div id="hourly-forecast-btn-group">
        <button className="hourly-forecast-btn" onClick={handleLeftBtnClick}>
          &lt;
        </button>
        <div
          className={dailyForecastHourGroup === 1 ? 'circle filled' : 'circle'}
        ></div>
        <div
          className={dailyForecastHourGroup === 2 ? 'circle filled' : 'circle'}
        ></div>
        <div
          className={dailyForecastHourGroup === 3 ? 'circle filled' : 'circle'}
        ></div>
        <button className="hourly-forecast-btn" onClick={handleRightBtnClick}>
          &gt;
        </button>
      </div>
    </div>
  );
}
