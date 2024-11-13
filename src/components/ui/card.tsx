import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  const formattedTitle = title.replace(/[^a-zA-Z0-9 ]/g, " ");
  return (
    <Link
      href={`/post/${title}`}
      className="flex flex-col rounded bg-purple-950 w-full sm:w-64 md:w-72 lg:w-80 max-h-96 m-4"
    >
      <header className="w-full text-center">
        <h1 className="bg-white text-black m-3 p-2 rounded">
          {formattedTitle}
        </h1>
      </header>
      <section className="relative w-full h-48">
        <img
          src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA="
          alt=""
        />
      </section>
      <footer className="flex justify-center items-center text-white text-center mt-4 mb-5 overflow-y-hidden">
        <p className="w-full max-w-lg mt-4 break-words line-clamp-4">
          {description}
        </p>
      </footer>
    </Link>
  );
}
