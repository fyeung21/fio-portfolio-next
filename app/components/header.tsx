import Link from "next/link";

export default function Header() {
  return (
    <section className="font-sans text-shadow-lg m-4 flex flex-row items-center justify-between">
      <article className="text-3xl">fiona.</article>
      <article>
        <nav>
          <ul className="flex flex-row">
            <Link href="/">
              <li className="mx-2">work</li>
            </Link>
            <Link href="/about">
              <li className="ml-2">about</li>
            </Link>
          </ul>
        </nav>
      </article>
    </section>
  );
}
