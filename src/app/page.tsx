import Link from "next/link";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

const mockUrl = [
  "https://l0237siktb.ufs.sh/f/G7g2e028EcPgWYItYPF2hYxos57tZAGQazgdDjLiMnNVFOJU",
]

const mockImage = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {


  return (
    <main className="">
      <div className ="flex flex-wrap gap-4">
        {mockImage.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image"/>
      </div>
        ))}
      </div>
      Hello (deployed in vercel)
    </main>
  );
}
