import Image from "next/image";
import NavBar from "../../components/nav";
import Link from "next/link";

export default function Blog() {
  return (
    <section>
      <NavBar>
        <h1 className="font-mono text-4xl">
          <Link href="/blog">All Posts</Link>
        </h1>
      </NavBar>
      <div className="m-10 my-40 flex w-fit cursor-pointer flex-col items-center justify-center hover:scale-105">
        <Link className="text-center" href="/blog/ticker">
          <Image
            className="rounded-xl"
            src="/scroll-component.png"
            width={300}
            height={150}
            alt="scroll component"
          />
          Super Simple News Ticker with Tailwind
        </Link>
      </div>
    </section>
  );
}
