import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function fetchBlogPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "src", "markdown", `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { content, data } = matter(fileContent);

    const postData = {
      title: data.title || "", 
      description: data.description || "",
      banner: data.banner || "", 
    };


    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      contentHtml,
      data: postData,
    };
  } catch (error) {
    console.error("Erro ao buscar o post:", error);
    return {
      contentHtml: "",
      data: {
        title: "Erro",
        description: "Erro ao carregar o post",
        banner: "",
      },
    };
  }
}
