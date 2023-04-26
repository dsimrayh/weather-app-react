export default function processLocationData(data) {
  const { name: city, region, country, localtime } = data;

  return {
    city,
    region,
    country,
    localtime,
  };
}
