import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";
import ArrowLeft from "../../public/images/arrow-left.svg";
import ArrowRight from "../../public/images/arrow-right.svg";
import ChevronLeft from "../../public/images/chevron-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <Container>
      <AllVolumesLink href="/volumes">
        {" "}
        <ChevronLeft />
        All Volumes
      </AllVolumesLink>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BookVolume $color={color}>
        <BookList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <BookOrdinal>{ordinal}:</BookOrdinal>
              <BookTitle>{title}</BookTitle>
            </li>
          ))}
        </BookList>
        <Book
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </BookVolume>
      <Navigation>
        {previousVolume ? (
          <NavLink href={`/volumes/${previousVolume.slug}`} $position="left">
            <ArrowLeft />
            <div>
              <VolumeHeading>Previous Volume</VolumeHeading>{" "}
              <TitleLink>{previousVolume.title}</TitleLink>
            </div>
          </NavLink>
        ) : null}
        {nextVolume ? (
          <NavLink href={`/volumes/${nextVolume.slug}`} $position="right">
            <div>
              <VolumeHeading>Next Volume</VolumeHeading>{" "}
              <TitleLink>{nextVolume.title}</TitleLink>
            </div>
            <ArrowRight />
          </NavLink>
        ) : null}
      </Navigation>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
`;

const AllVolumesLink = styled(Link)`
  text-decoration: none;
  color: unset;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Description = styled.p`
  font: var(--font-body);
  font-weight: normal;
  line-height: 1.5rem;
  padding: 0.75 0;
`;

const BookList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const BookOrdinal = styled.p`
  font: var(--font-caption-italic);
  margin: 0;
  margin-bottom: 8px;
`;

const BookTitle = styled.strong`
  font: var(--font-title);
`;

const Book = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const BookVolume = styled.div`
  color: var(--color-smoke);
  margin-inline: -2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem;
  background: linear-gradient(
    100deg,
    ${({ $color }) =>
      `${$color} 40%, color-mix(in lch, ${$color}, var(--color-smoke)) 140%`}
  );
  margin-bottom: 1.5rem;
`;

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "prev" "next";
  margin-top: 2rem;
  gap: 8px;
  align-items: center;
  font-weight: normal;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ $position }) =>
    $position === "left" &&
    css`
      grid-area: prev;
      justify-self: start;
      text-align: left;
    `}
  ${({ $position }) =>
    $position === "right" &&
    css`
      grid-area: next;
      justify-self: end;
      text-align: right;
    `};
`;

const VolumeHeading = styled.p`
  font: var(--font-caption--italic);
  font-weight: normal;
  font-size: 12px;
  line-height: 1.2rem;
  margin: 0;
`;

const TitleLink = styled.p`
  font: var(--font-caption);
  font-weight: bold;
  margin: 0;
`;
