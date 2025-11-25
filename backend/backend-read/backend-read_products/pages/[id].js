import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import Comments from "@/components/Comments";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditProduct(productData) {
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }
    router.push("/");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
      <hr />
      {/* Edit Button */}
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        {isEditMode ? "Cancel Edit" : "Edit Fish"}
      </StyledButton>
      {/* Delete button */}
      <StyledButton type="button" onClick={handleDeleteProduct}>
        Delete Fish
      </StyledButton>
      {/* Show only when in edit mode */}
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} title="Edit this fish" />
      )}
      <Comments reviews={data.reviews} />
    </>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

export const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  &:hover {
    cursor: pointer;
  }
`;
