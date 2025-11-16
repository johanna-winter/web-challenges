import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  console.log("Books: ", volume.books[0].ordinal, ":", volume.books[0].title);

  const { title, description, cover } = volume;
  const index = volumes.findIndex((vol) => vol.slug === volume.slug);
  const nextVolume = volumes[index + 1];
  const prevVolume = volumes[index - 1];
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {volume.books[0].ordinal}: {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal}: {volume.books[1].title}
        </li>
      </ul>
      <Image src={cover} alt={`${title}`} width={140} height={230}></Image>
      {prevVolume ? (
        <div>
          <Link href={`/volumes/${prevVolume.slug}`}>
            {" "}
            ← Previous volume: {prevVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
