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
      className="group flex flex-col rounded-lg w-full sm:w-64 md:w-72 lg:w-80 max-h-96 m-4 overflow-hidden transition-transform transform hover:scale-105"
    >
      <section className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={banner || "https://www.creativefabrica.com/wp-content/uploads/2022/03/05/Stylish-abstract-pattern-design-Graphics-26514963-1-1-580x386.jpg"}
          alt={formattedTitle}
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-3">
          <h1 className="text-white text-lg font-semibold line-clamp-1">
            {formattedTitle}
          </h1>
        </div>
      </section>
      <footer className="flex items-start bg-gray-800 text-white text-sm p-4 rounded-b-lg max-h-24 overflow-hidden">
        <p className="line-clamp-3">{description}</p>
      </footer>
    </Link>
  );

}
