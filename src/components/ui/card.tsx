import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  banner: string;
}

export function Card({ title, description, banner }: CardProps) {
  const formattedTitle = title.replaceAll("-", " ");

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
      <section className="w-full h-48 overflow-hidden">
        <img
        className="object-cover"
          src={banner}
          alt="blog"
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
