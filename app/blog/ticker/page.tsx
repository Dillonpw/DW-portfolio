"use client";

import Header from "../../../components/blogComponents/header";
import Scroll from "../../../components/blogComponents/scroll";
import Textbox from "../../../components/blogComponents/textBox";
import NavBar from "../../../components/nav";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Textbox
        text="So you find yourself with a list of items you want to display on your
        page, but don't necessarily want to give any one item more visibility or
        favorability than the others the way a grid would inherently place som eitems above others. For example,
        maybe you're showing off a list of sponsors, or perhaps a list of
        clients who use your awesome technology!  I have a solution for you... Build a contiuously scrolling news ticker compenent."
      />
      <Scroll />
    </>
  );
}
