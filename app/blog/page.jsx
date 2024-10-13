import Image from "next/image";
import NavBar from "../../components/nav";
import Link from "next/link";

export default function Blog() {
  return (
    <section>
      <NavBar>
        <h1 className="text-4xl">
          <Link href="/blog">All Posts</Link>
        </h1>
      </NavBar>
      <div className="m-10 my-40 flex w-fit cursor-pointer flex-col items-center justify-center">
        <Link className="text-center hover:underline" href="/blog/ticker">
          <Image
            className="rounded-xl"
            src="/scroll-component.png"
            width={300}
            height={150}
            alt="scroll component"
          />
          Simple News Ticker with Tailwind
        </Link>
        <p className="font-light italic opacity-60">Dillon Walsh 10/13/24</p>
      </div>
    </section>
  );
}
