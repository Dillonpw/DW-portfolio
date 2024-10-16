"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/blogComponents/header";
import Scroll from "../../../components/blogComponents/scroll";
import Textbox from "../../../components/blogComponents/textBox";
import NavBar from "../../../components/nav";

export default function Home() {
  return (
    <>
      <NavBar>
        <h1 className="text-center font-mono text-xl lg:text-2xl">
          <Link href="/blog">blog</Link>
        </h1>
      </NavBar>
      <Header />
      <Textbox text="When you have a list of items to display—like sponsors or clients using your technology—you might want a way to showcase them without prioritizing any one item over the others. Unlike a grid, which naturally places some items higher than others, a more balanced approach would be ideal. Enter the solution: a continuously scrolling news ticker component. This allows you to display your items evenly, ensuring every entry gets the same level of visibility. While one item will always appear first, the continuous scroll ensures no single item gets more weight than another. I use this approach in my portfolio to display the various technologies I have experience with. Sure, I’m more proficient in some than others, but this way I don’t have to rank or weigh my skills." />
      <Textbox text="Here is a minimal example of how the Ticker component would look with an added background for contrast." />
      <Scroll />
      <Textbox text="As you can see, the items we have placed in the component rotate seamlessly regardess of screen size. We accomplish this with suprisingly little css:" />

      <Image
        src="/scroll-component.png"
        alt="jsx"
        height={420}
        width={820}
        className="mx-auto flex justify-center rounded-lg"
      />
      <Textbox text="Most of the CSS will depend on your specific needs and your particular use case, but what is essential is" />
    </>
  );
}
