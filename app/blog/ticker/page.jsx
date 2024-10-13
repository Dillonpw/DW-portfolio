"use client";
import Link from "next/link";
import Header from "../../../components/blogComponents/header";
import Scroll from "../../../components/blogComponents/scroll";
import Textbox from "../../../components/blogComponents/textBox";
import NavBar from "../../../components/nav";

export default function Home() {
  return (
    <>
      <NavBar>
        <h1 className="font-mono text-4xl">
          <Link href="/blog">blog</Link>
        </h1>
      </NavBar>
      <Header />
      <Textbox text="When you have a list of items to display—like sponsors or clients using your technology—you might want a way to showcase them without prioritizing any one item over the others. Unlike a grid, which naturally places some items higher than others, a more balanced approach would be ideal. Enter the solution: a continuously scrolling news ticker component. This allows you to display your items evenly, ensuring every entry gets the same level of visibility. While one item will always appear first, the continuous scroll ensures no single item gets more weight than another. I use this approach in my portfolio to display the various technologies I have experience with. Sure, I’m more proficient in some than others, but this way I don’t have to rank or weigh my skills." />
      <Scroll />
    </>
  );
}
