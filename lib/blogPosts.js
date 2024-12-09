import Image from "next/image";
import Scroll from "../components/scroll.jsx";

export const allPosts = [
  {
    title: "Creating a Scrolling Ticker Component",
    date: "10/20/2024",
    excerpt:
      "Learn how to build a continuously scrolling news ticker component with React.",
    slug: "creating-a-scrolling-ticker-component",
    coverImage: "/scroll-component.png",
    content: <article className="mx-10 flex flex-col gap-6 "></article>,
  },
  {
    title: "Astro with Motion.dev using vanilla JS",
    date: "12/9/2024",
    excerpt:
      "Learn how to get started with Motion.dev in an Astro project for beautiful and simple animations.",
    slug: "integrating-astro-with-motion-dev-using-vanilla-js",
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
            but it can be a lot of work sometimes.
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
        </section>
        <section className="space-y-4 px-8">
          <Image
            src="/astro-motion.png"
            alt="Full starter file with motion animations"
            height={420}
            width={820}
            className="mx-auto mb-6 flex justify-center rounded-lg"
          />
          <p>
            That&apos;s all there is to it! add the above code to your project,
            make sure you are able to match up the new id and class tags and it
            should look like the example below in no time. Hopefully, you found
            this useful! It can simplify the process of adding animations to
            your project. Go give it a try and see how it works for you!
          </p>
        </section>
        <section className="px-8">
          <p>
            {" "}
            here&apos;s my live example:{" "}
            <a href="https://motion-astro.vercel.app/" target="_blank">
              Click here
            </a>
          </p>
        </section>
      </article>
    ),
  },
  // Add more blog posts here
];
