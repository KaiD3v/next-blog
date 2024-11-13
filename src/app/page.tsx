import { Card } from "@/components/ui/card";
import fetchData from "@/functions/get-posts-slugs";

export default async function Home() {
  const slugs = await fetchData();
  const formattedSlugs = await Promise.resolve(
    slugs.map((slug) => slug.replace(".mdx", ""))
  );

  return (
    <main className="w-full h-full my-10 mx-auto max-w-[1280px] bg-gray-200/50 rounded">
      <section className="w-full flex flex-col justify-center items-center mt-10">
        <h1 className="font-bold text-2xl">Postagens</h1>
        <div className="flex flex-wrap justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {formattedSlugs.length > 0 &&
            formattedSlugs.map((slug) => <Card key={slug} slug={slug} />)}
        </div>
      </section>
    </main>
  );
}
