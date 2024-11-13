import { Card } from "@/components/ui/card";
import fetchSlug from "@/functions/get-posts-slugs";
import fetchPosts from "@/functions/get-posts-content";
import { fetchBlogPost } from "@/functions/fetch-blog-post";

interface Post {
  contentHtml: string;
  data: {
    title: string;
    description: string;
    banner: string;
  };
}

export default async function Home() {
  const slugs = await fetchSlug();
  const formattedSlugs = await Promise.resolve(
    slugs.map((slug) => slug.replace(".mdx", ""))
  );

  const posts: Post[] = await Promise.all(
    formattedSlugs.map(async (slug) => {
      const post = await fetchBlogPost(slug);
      return post;
    })
  );

  return (
    <main className="w-full h-full my-10 mx-auto max-w-[1280px] bg-gray-200/50 rounded">
      <section className="w-full flex flex-col justify-center items-center mt-10">
        <h1 className="font-bold text-2xl">Postagens</h1>
        <div className="flex flex-wrap justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 &&
            posts.map((post, index) => (
              <Card key={index} title={formattedSlugs[index]} description={post.data.description} banner={post.data.banner}/>
            ))}
        </div>
      </section>
    </main>
  );
}
