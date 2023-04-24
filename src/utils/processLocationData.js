export default function processLocationData(data) {
  const { name: city, region, country, localtime } = data;

  console.log({
    city,
    region,
    country,
    localtime,
  });
}
