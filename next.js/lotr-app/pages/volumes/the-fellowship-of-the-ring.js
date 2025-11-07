import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(volumes[0]);
  console.log("Books:", volume.books[0].ordinal, ",", volume.books[1].ordinal);
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        <li>
          {volume.books[0].ordinal}: {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal}: {volume.books[1].title}
        </li>
      </ul>
      <Image
        src={volume.cover}
        // Image path: /Users/johanna/web-bootcamp/web-challenges/next.js/lotr-app/public/images/the-fellowship-of-the-ring.png
        alt="The Fellowship of the Ring"
        width={140}
        height={230}
      ></Image>
    </>
  );
}
