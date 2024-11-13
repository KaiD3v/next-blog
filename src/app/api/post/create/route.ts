import * as fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { postSlug, postContent } = await req.json();

    if (!postSlug || !postContent) {
      return NextResponse.json(
        { message: 'Slug e conteúdo são necessários' },
        { status: 400 }
      );
    }

    const markdownDirectoryPath = path.join(process.cwd(), '/src/markdown');
    const filePath = path.join(markdownDirectoryPath, `${postSlug}.mdx`);

    if (!fs.existsSync(markdownDirectoryPath)) {
      fs.mkdirSync(markdownDirectoryPath, { recursive: true });
    }

    fs.writeFileSync(filePath, postContent, 'utf8');

    return NextResponse.json({ message: 'Post criado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Erro ao criar o post' },
      { status: 500 }
    );
  }
}
