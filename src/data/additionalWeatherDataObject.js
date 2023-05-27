export const additionalWeatherDataObject = [
  {
    id: 0,
    title: 'Feels like',
    category: 'current',
    unitsCanChange: true,
    contentF: {
      path: 'feelslike_f',
      unit: 'º',
    },
    contentC: {
      path: 'feelslike_c',
      unit: 'º',
    },
  },
  {
    id: 1,
    title: 'Wind speed',
    category: 'current',
    unitsCanChange: true,
    contentF: {
      path: 'wind_mph',
      unit: ' mph',
    },
    contentC: {
      path: 'wind_kph',
      unit: ' kph',
    },
  },
  {
    id: 2,
    title: 'Wind direction',
    category: 'current',
    unitsCanChange: false,
    content: 'wind_dir',
  },
  {
    id: 3,
    title: 'Precipitation chance',
    category: 'forecast',
    unitsCanChange: false,
    content: 'daily_chance_of_rain',
    unit: '%',
  },
  {
    id: 4,
    title: 'Total precipitation',
    category: 'forecast',
    unitsCanChange: true,
    contentF: {
      path: 'totalprecip_in',
      unit: ' in',
    },
    contentC: {
      path: 'totalprecip_mm',
      unit: ' mm',
    },
  },
  {
    id: 5,
    title: 'Humidity',
    category: 'current',
    unitsCanChange: false,
    content: 'humidity',
    unit: '%',
  },
  {
    id: 6,
    title: 'Pressure',
    category: 'current',
    unitsCanChange: true,
    contentF: {
      path: 'pressure_in',
      unit: ' in',
    },
    contentC: {
      path: 'pressure_mb',
      unit: ' mb',
    },
  },
  {
    id: 7,
    title: 'UV',
    category: 'current',
    unitsCanChange: false,
    content: 'uv',
  },
  {
    id: 8,
    title: 'Visibility',
    category: 'current',
    unitsCanChange: true,
    contentF: {
      path: 'vis_miles',
      unit: ' mi',
    },
    contentC: {
      path: 'vis_km',
      unit: ' km',
    },
  },
  {
    id: 9,
    title: 'Cloud cover',
    category: 'current',
    unitsCanChange: false,
    content: 'cloud',
    unit: '%',
  },
];
