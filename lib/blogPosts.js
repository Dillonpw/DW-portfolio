import Image from "next/image";
import Scroll from "../components/scroll.jsx";

export const allPosts = [
  {
    title: "Creating a Scrolling Ticker Component",
    date: "10/20/2024",
    excerpt:
      "Learn how to build a continuously scrolling news ticker component for your Next.js application.",
    slug: "creating-a-scrolling-ticker-component",
    coverImage: "/scroll-component.png",
    content: (
      <article className="flex flex-col gap-6">
        <section className="px-8">
          <p>
            When you have a list of items to display—like sponsors for a product
            or clients using your technology—you might want a way to showcase
            them without prioritizing any one item over the others. Unlike a
            grid, which naturally places some items higher than others, a more
            balanced approach would be ideal.
          </p>
          <p>
            You've probably come across the solution I am going to show you
            here. An infinitely scrolling news ticker component allows you to
            display your items evenly, ensuring every entry gets the same level
            of visibility. While one item will always appear first, the
            continuous scroll ensures no single item gets more weight than
            another. I use this approach in my portfolio to display the various
            technologies I have experience with. Sure, I'm more proficient in
            some than others, but this way I don't have to rank or weigh my
            skills.
          </p>
        </section>
        <section className="px-8">
          <p className="mb-4 text-lg">
            Here's a minimal example of the component:
          </p>
          <Scroll />
          <p className="mt-4">
            As you can see, the items we have placed in the component rotate
            seamlessly regardless of screen size. We accomplish this with
            surprisingly little CSS: A container section with the classes{" "}
            <code>flex</code> to place the arrays in a row and{" "}
            <code>overflow-hidden</code> so the arrays are spread out and hidden
            outside of the viewport. Inside that section, we need two identical
            sections that map over our array of items with the class{" "}
            <code>flex</code>, <code>min-w-full</code>, and{" "}
            <code>justify-evenly</code> so the items inside our arrays are
            spread out evenly in their rows, using all available space, and
            finally <code>animate-marquee</code>.
          </p>
        </section>
        <section className="px-8">
          <Image
            src="/scroll-component.png"
            alt="JSX code for the scrolling ticker component"
            height={420}
            width={820}
            className="mx-auto my-4 flex justify-center rounded-lg"
          />
          <p>
            <code>animate-marquee</code> consists of a custom keyframe and
            animation we add to the Tailwind config file:
          </p>
          <Image
            src="/scroll-config.png"
            alt="Configuration file for the scrolling ticker component"
            height={420}
            width={820}
            className="mx-auto my-4 flex justify-center rounded-lg"
          />
          <p>
            That's all there is to it! Hopefully, you found this useful! It's
            the kind of animation you'll find all over the web, but it can be
            hard to decipher how it's being done in the dev tools, and often
            times you won't be able to find a good explanation if you try to
            search for it either. Of course this code can be adapted for
            different technologies and you can play around with the animation
            settings to get the pace or even teh direction you want. So go give
            it a try and see if it works for you!
          </p>
        </section>
      </article>
    ),
  },

  // Add more blog posts here
];
