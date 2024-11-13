import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  slug: string;
}

export function Card({ slug }: CardProps) {
  return (
    <Link
      href={`/post/${slug}`}
      className="flex flex-col rounded bg-purple-950 w-full sm:w-64 md:w-72 lg:w-80 h-auto m-4"
    >
      <header className="w-full text-center">
        <h1 className="bg-white text-black m-3 p-2 rounded">{slug}</h1>
      </header>
      <section className="relative w-full h-48">
        <img src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=" alt="" />
      </section>
      <footer className="text-white text-center mt-4 mb-5">
      </footer>
    </Link>
  );
}
