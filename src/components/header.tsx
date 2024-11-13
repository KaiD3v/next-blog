import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full h-14 shadow-xl">
      <div className="ml-3">
        <h1 className="text-xl">
          <Link href={'/'}>Next<b>BLOG</b></Link>
        </h1>
      </div>
      <ul className="flex mr-3">
        <li>
          <Link href={"/post/create"} >Postar</Link>
        </li>
      </ul>
    </header>
  );
}
