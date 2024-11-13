import { Card } from "@/components/ui/card";
import fetchSlug from "@/functions/get-posts-slugs";
import fetchPosts from "@/functions/get-posts-content";

export default async function Home() {
  const slugs = await fetchSlug();
  const posts = await fetchPosts();
  const formattedSlugs = await Promise.resolve(
    slugs.map((slug) => slug.replace(".mdx", ""))
  );

  console.log(posts);

  return (
    <main className="w-full h-full my-10 mx-auto max-w-[1280px] bg-gray-200/50 rounded">
      <section className="w-full flex flex-col justify-center items-center mt-10">
        <h1 className="font-bold text-2xl">Postagens</h1>
        <div className="flex flex-wrap justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {formattedSlugs.length > 0 &&
            formattedSlugs.map((slug, index) => (
              <Card key={index} title={slug} description={posts[index]} />
            ))}
        </div>
      </section>
    </main>
  );
}
