import Image from "next/image"; 
import Scroll from "../components/scroll.jsx"; 

export const allPosts = [
    {
        title: "Creating a Scrolling Ticker Component",
        date: "2024-10-20",
        excerpt: "Learn how to build a continuously scrolling news ticker component for your Next.js application.",
        slug: "creating-a-scrolling-ticker-component",
        coverImage: "/path-to-cover-image.jpg",
        content: (
          <>
            <section>
              <h2>Creating a Scrolling Ticker Component</h2>
              <p>
                When you have a list of items to display—like sponsors or clients using your technology—you might want a way to showcase them without prioritizing any one item over the others. Unlike a grid, which naturally places some items higher than others, a more balanced approach would be ideal.
              </p>
              <p>
                Enter the solution: a continuously scrolling news ticker component. This allows you to display your items evenly, ensuring every entry gets the same level of visibility. While one item will always appear first, the continuous scroll ensures no single item gets more weight than another.
              </p>
              <p>
                I use this approach in my portfolio to display the various technologies I have experience with. Sure, I'm more proficient in some than others, but this way I don't have to rank or weigh my skills.
              </p>
            </section>
            <section>
              <h3>Example Implementation</h3>
              <p>Here's a minimal example of the component:</p>
              <Scroll />
              <p>
                As you can see, the items we have placed in the component rotate seamlessly regardless of screen size. We accomplish this with surprisingly little CSS:
              </p>
              <ol>
                <li>
                  A container section with the classes <code>flex</code> to place the arrays in a row and <code>overflow-hidden</code> so the arrays don't squeeze into the screen, but instead are hidden outside of the viewport.
                </li>
                <li>Two identical sections with the class <code>flex</code>.</li>
              </ol>
            </section>
            <section>
              <h3>The Code</h3>
              <Image
                src="/scroll-component.png"
                alt="JSX code for the scrolling ticker component"
                height={420}
                width={820}
                className="mx-auto flex justify-center rounded-lg"
              />
              <p>And here's the configuration file:</p>
              <Image
                src="/scroll-config.png"
                alt="Configuration file for the scrolling ticker component"
                height={420}
                width={820}
                className="mx-auto flex justify-center rounded-lg"
              />
            </section>
            <section>
              <h3>How It Works</h3>
              <p>
                The component works by creating two identical lists of items and placing them side by side. The animation then moves both lists to the left continuously. When the first list has scrolled completely out of view, it seamlessly transitions to the second list, creating the illusion of infinite scrolling.
              </p>
            </section>
            <section>
              <h3>Customization</h3>
              <p>You can easily customize this component by:</p>
              <ol>
                <li>Changing the items in the array</li>
                <li>Adjusting the animation speed</li>
                <li>Modifying the styles of the individual items</li>
              </ol>
            </section>
            <section>
              <h3>Conclusion</h3>
              <p>
                This scrolling ticker component provides an elegant solution for displaying lists of items without hierarchy. It's particularly useful for showcasing skills, technologies, or clients in a portfolio or marketing website.
              </p>
              <p>Feel free to use and adapt this component in your own projects!</p>
            </section>
          </>
        ),
      }
      
    // Add more blog posts here
  ];
  