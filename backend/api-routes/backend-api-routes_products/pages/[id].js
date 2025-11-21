import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data: products, isLoading } = useSWR(`/api/products/${id}`, (url) =>
    fetch(url).then((response) => response.json())
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!products) {
    return null;
  }
  return (
    <>
      <Link href={"/"}>Back to all</Link>
      <h1>{products.name}</h1>
    </>
  );
}
