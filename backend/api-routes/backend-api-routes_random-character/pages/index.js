import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("api/random-character", (url) =>
    fetch(url).then((response) => response.json())
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>Fetched data:</h1>
      <h2>
        {data.firstName} {data.lastName}
      </h2>
      <h3>Twitter: {data.twitterName}</h3>
      <h3>Geohash: {data.geoHash}</h3>
    </>
  );
}
