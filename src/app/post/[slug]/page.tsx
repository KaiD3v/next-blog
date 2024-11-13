// app/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { redirect } from "next/navigation";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

async function fetchBlogPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "src", "markdown", `${slug}.mdx`);

    const fileContent = fs.readFileSync(filePath, "utf8");

    const { content, data } = matter(fileContent);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      contentHtml,
      data,
    };
  } catch (error) {
    redirect("/");
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  const post = await fetchBlogPost(slug);

  return (
    <main className="prose mx-auto">
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
