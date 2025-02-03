import Link from "next/link";
import { db } from "~/server/db";

const mockUrl = [
  "https://l0237siktb.ufs.sh/f/G7g2e028EcPgWYItYPF2hYxos57tZAGQazgdDjLiMnNVFOJU",
];

const mockImage = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage({ posts }: { posts: { id: number; name: string }[] }) {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImage.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (deployed in Vercel)
    </main>
  );
}

export async function getServerSideProps() {
  const posts = await db.query.posts.findMany();

  return {
    props: { posts },
  };
}
