import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <BoxContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  display: flex;
`;
