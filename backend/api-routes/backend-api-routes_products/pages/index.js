import Link from "next/link";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/products", (url) =>
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
      <h1>Welcome to Next.js API Routes!</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
