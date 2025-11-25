import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";
import styled from "styled-components";
import useSWR from "swr";

export default function HomePage() {
  const { mutate } = useSWR("/api/products");

  async function handleAddProduct(data) {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} title="Add a new Fish" />
      <hr />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
