import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
  return (
    <Container>
      <Title>The Lord of the Rings</Title>
      <Description>{introduction}</Description>
      <VolumeTitle>All Volumes</VolumeTitle>
      <VolumeList>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Image
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={80}
              height={130}
            />
            <StyledLink href={`/volumes/${volume.slug}`}>
              <Volume>{volume.title}</Volume>
            </StyledLink>
          </li>
        ))}
      </VolumeList>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Description = styled.p`
  font: var(--font-body);
  padding-block: 1rem;
`;

const VolumeTitle = styled.h2`
  font: var(--font-headline-2);
`;

const VolumeList = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;

const Volume = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font: var(--font-caption);
`;
