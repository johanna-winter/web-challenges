import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const randomElement = getRandomElement(volumes);
console.log("Random volume: ", randomElement);

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <Link href="/volumes">Go to all volumes</Link>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          router.push(`/volumes/${randomElement.slug}`);
        }}
      >
        Get random volume
      </button>
    </div>
  );
}
