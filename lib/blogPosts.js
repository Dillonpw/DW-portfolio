import Image from "next/image";
import Scroll from "../components/scroll.jsx";

export const allPosts = [
  {
    title: "Creating a Scrolling Ticker Component",
    date: "2024-10-20",
    excerpt:
      "How to build a continuously scrolling news ticker component with React.",
    slug: "creating-a-scrolling-ticker-component",
    coverImage: "/scroll-component.png",
    content: (
      <article className="mx-10 flex flex-col gap-6 ">
        <section className="px-8">
          <p>
            When you have a list of items to display—like sponsors for a product
            or clients using your technology—you might want a way to showcase
            them without prioritizing any one item over the others. In some
            cases it will be neccessary to promote some things over others, but
            what about when each item on the list is equally important? Unlike a
            grid or your standard <br />
            <code>{"<ul><li></li></ul>"}</code> list, which naturally elevates
            some items over others, a more balanced approach would be ideal.
          </p>
          <br />
          <p>
            You&apos;ve probably come across this very solution while browsing
            the web, but figuring out how it&apos;s done can be difficult. An
            infinitely scrolling ticker allows you to display your items evenly,
            ensuring every entry gets the same level of visibility. While one
            item will always appear first, the continuous scroll ensures no
            single item gets more attention than the others. I use this approach
            in my portfolio to display the various technologies I have
            experience with, and i&apos;ve used it several times on my public
            work as well. Sure, I&apos;m more proficient in some than others,
            but this way I don&apos;t have to rank or weigh my skills.
          </p>
        </section>
        <section className="px-8">
          <p className="mb-4 text-lg">
            Here&apos;s a minimal example of the component:
          </p>
          <Scroll />
          <p className="mt-8">
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
        <section className="space-y-4 px-8">
          <Image
            src="/scroll-component.png"
            alt="JSX code for the scrolling ticker component"
            height={420}
            width={820}
            className="mx-auto mb-6 flex justify-center rounded-lg"
          />

          <Image
            src="/scroll-config.png"
            alt="Configuration file for the scrolling ticker component"
            height={420}
            width={820}
            className="mx-auto mb-6 flex justify-center rounded-lg"
          />
          <p>
            <code>animate-marquee</code> consists of a custom keyframe and
            animation we add to the Tailwind config file. <br />
            That&apos;s all there is to it! Hopefully, you found this useful!
            It&apos;s the kind of animation you&apos;ll find all over the web,
            but it can be hard to decipher how it&apos;s being done in the dev
            tools, and often times you won&apos;t be able to find a good
            explanation if you try to search for it either. Of course this code
            can be adapted for different technologies and you can play around
            with the animation settings to get the pace or even the direction
            you want. So go give it a try and see if it works for you!
          </p>
        </section>
      </article>
    ),
  },

  {
    title: "Astro with Motion.dev using without a framework",
    date: "2024-12-09",
    excerpt:
      "Learn how to get started with Motion.dev in an Astro project for beautiful and simple animations.",
    slug: "integrating-astro-with-motion-dev-without-a-framework",
    coverImage: "/astro-motion.png",
    content: (
      <article className="mx-10 flex flex-col gap-6 ">
        <section className="px-8">
          <p>
            Astro is one of the most influential web frameworks around today and
            it is showing no signs of slowing down. Odds are pretty good if you
            haven&apos;t used Astro yet, you probably have heard of it. Astro
            has a ton of great features for making fast, performant applications
            in a mostly unopinionated way. Astro gives you the tools and lets
            you build how you want and what you want.
          </p>
        </section>
        <section className="px-8">
          <p>
            Up until recently, if you wanted to add animations to your Astro
            project, the View Transitions API made it simple for animating the
            transition between pages, but to style each individual component you
            were going to have to make your own animations using the tools CSS
            provides. There is nothing wrong with building your own animations,
            and you should be able to animate your components without a library,
            but it can be a lot of work.
          </p>
        </section>
        <section className="px-8">
          <p>
            If you haven&apos;t used it already... let me introduce you to
            Motion.dev! A React animation library that recently expanded to
            vanilla JavaScript, which integrates with Astro seamlessly. For this
            example, I am not going to go too deep into the ins and outs of the
            library, I just want to give a quick introduction to how you can get
            started with it in an Astro project. I highly recommend you dive
            into their docs as you really get involved with the library.
          </p>
          <br />
          <p>
            Here is all the JavaScript you have to add to the starter code to
            start seeing the animations:
          </p>
        </section>
        <section className="space-y-4 px-8">
          <pre className="rounded-md  p-4 text-xs">
            <code>
              {`import { animate } from "motion";

animate("#title", { y: [-60, 0] }, { type: "spring", damping: 9 });
animate("#motion", { opacity: [0, 1] }, { delay: 2.5 });
animate("h1", { y: [-65, 0] }, { type: "spring", damping: 10, delay: 0.1 });
animate(
"code",
{ rotateZ: [0, 360] },
{ type: "spring", damping: 10, delay: 0.4 }
);
animate(
".button",
{ x: [300, 0] },
{ type: "spring", delay: 0.3, damping: 30 }
);
animate("#discord", { opacity: [0, 1] }, { delay: 1.6 });
animate(
".box",
{ x: [-500, 0], opacity: [0, 1] },
{ type: "spring", damping: 12, delay: 1.9 }
);`}
            </code>
          </pre>
        </section>
        <section className="px-8">
          <br />
          <p>
            Be careful if you decide to just copy over the script above into the
            Astro starter, I added a few identifiers to divide some of the
            animations.
          </p>
          <br />
          <p>
            That&apos;s all there is to it! Bear in mind that when styling with
            Astro components, your styles are scoped to the component they are
            placed in unless otherwise directed, and in this example the styles
            and animations are component-scoped. Hopefully you found this
            useful! Motion is a great tool for getting interested in
            aniimations, but is also capable of some powerful stuff when you get
            deeper into it. Go give it a try and see how it works for you!
          </p>
          <p>
            Click here for{" "}
            <a
              href="https://motion-astro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:underline"
            >
              Live example
            </a>
          </p>
          <p>
            Click here for{" "}
            <a
              href="https://github.com/Dillonpw/motion-astro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:underline"
            >
              Github Repo
            </a>
          </p>
        </section>
      </article>
    ),
  },
];
