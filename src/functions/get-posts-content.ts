import path from "node:path";
import fetchSlugs from "./get-posts-slugs";
import * as fs from "node:fs";

function cleanContent(content: string): string {
  return content
    .replace(/#.*\n/g, "") // Remove linhas de títulos e subtítulos em Markdown
    .replace(/\n+/g, " ") // Substitui quebras de linha por espaços
    .replace(/[*_`~]/g, "") // Remove caracteres de Markdown como *, _, `, e ~
    .replace(/[^a-zA-Z0-9 ]/g, "") // Remove outros caracteres especiais
    .trim(); // Remove espaços extras no início e no fim
}

export async function fetchPosts() {
  const postSlugs = await fetchSlugs(); 
  const filePath = path.join(process.cwd(), "src", "markdown");

  const posts = await Promise.all(
    postSlugs.map(async (post) => {
      const content = await fs.readFileSync(`${filePath}/${post}`, "utf8");
      return cleanContent(content); 
    })
  );

  return posts;
}

export default fetchPosts;
