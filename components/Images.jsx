const images = [
  {
    id: "rotating-schedule",
    src: "/schedtrack-dt.jpeg",
    src2: "/schedtrack-dt2.jpeg",
    mobileImg: "/Schedtrack-m.jpeg",
    livePreviewLink: "https://www.schedtrack.com/",
    githubLink: "https://github.com/Dillonpw/schedule",
    title: "Sched Track",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Shadcn/ui",
      "Auth.js",
      "Drizzle ORM",
      "Neon Postgres",
      "Playwright",
    ],
    challenge:
      "This project was fun getting deeper into the server side, working with a new ORM and preparing to provide an actual utility tool. For now, the product remains free with Stripe donation options, but a paid version may come down the pipeline if it becomes too expensive to manage. I referenced several previous projects to make sure I was on the right track throughout development, as well as relevant documentation.",
    about:
      "A free schedule generator app for people who work rotating shifts based on a 24-hour basis instead of a Monday-Friday schedule. The app accepts input and returns a schedule based on the type of rotation the user needs to build around, with output displayed in the form of a simple, asthetic calendar. This project allows for either Google login, GitHub, or magic link login with an email address. The app has a built in light/dark/system toggle and intuitive navogation layout. There are plans to shift the user specific navigation into a sidebar, and to allow for more intricate schedule building and to update each individual day with adjustments such as vacation, appointments etc.",
  },
  {
    id: "ecommerce-site",
    src: "/ecommerce.png",
    src2: "/ecommerce-2.png",
    mobileImg: "/ecommerce-m.png",
    livePreviewLink: "shop-dillonpws-projects.vercel.app",
    githubLink: "https://github.com/Dillonpw/ecommerce",
    title: "Ecommerce Site",
    tags: ["TypeScript", "React", "Tailwind CSS", "TailwindUI", "Shadcn/ui"],
    challenge:
      "This project was at the time the largest react application I'd built, and with that came some challenges: for one, I struggled a bit with sharing state between components and pages. I failed to realize that the concept I was inventing in my head and almost in my code already existed in the form of useContext. Once that was out of the way, I found some difficulty in positioning certain elements exactly where I wanted them so they looked presentable both on desktop and mobile, but a few Tailwind size adjustments sorted that out.",
    about:
      "Engaging in this project introduced me to many new concepts within React. I dove headfirst into the useContext hook and scoured the React documentation to gain what I believe is a working grasp of its uses. In the end, I am happy with the outcome. The goal was to create something purposely generic and minimal, and I believe that’s what I have achieved. You will notice a checkout area if you decide to go through the motions of the website; it does not submit anything, it just clears the cart.",
  },
  {
    id: "FEM-LP1",
    src: "/home-dt.jpeg",
    mobileImg: "/home-m.jpeg",
    livePreviewLink: "https://spa-liard.vercel.app/",
    githubLink: "https://github.com/Dillonpw/FEM-LP1",
    title: "Design File To Code",
    tags: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    challenge:
      "The only challenge I ran into with this simple design-to-code project was after designing mobile first with Flexbox. In order to get the layout I needed for desktop, I had to rebuild using Grid instead. No huge issues with the transition, but it did set me back a bit. The purpose of this project for me was to test how quickly and how closely I could take a design file and produce a finished project.",
    about:
      "This project was taken from Frontendmentor.io, supplying the design and expected outcome. I used Tailwind and a few React components to bring the design file to life, in a form as close to pixel-perfect as I could get without excruciating adjustments. The project took approximately 3 hours of work from download to finished project. The time was mostly due to the experience I have with the tools I used.",
  },
  {
    id: "tech-LP",
    src: "/techLP.jpeg",
    mobileImg: "/techLP-m.jpeg",
    livePreviewLink: "https://homefem.vercel.app/",
    githubLink: "https://github.com/Dillonpw/spa",
    title: "Tech start up landing page",
    tags: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    challenge:
      "Nothing about this project came as especially challenging, though I did dive heavily into motion(formerly known as framer-motion) as a tool for my page's animaitons where I usually throw something together with my own CSS.",
    about:
      "A single page application designed and built entirely by myself using, to display a sample of a tech start up's landing page to display my expanding experience as a Frontend Developer.",
  },
  {
    id: "small-bis",
    src: "/small-bis.jpeg",
    mobileImg: "/small-bis-m.jpeg",
    livePreviewLink: "https://t1.dillonwalsh.com/",
    githubLink: "https://github.com/Dillonpw/small-bis",
    title: "Small Business Template",
    tags: ["TypeScript", "React", "Tailwind CSS", "Astro", "Playwright"],
    challenge:
      "This project was another valuable learning experience in using Astro, my favorite framework for static site generation and server-side rendering. One of the primary challenges was ensuring the UI design was both precise and aesthetically pleasing, which required attention to detail and careful planning. Additionally, integrating TypeScript and ensuring the template was fully responsive across different devices were significant tasks that demanded thorough testing and iteration.",
    about:
      "This is a fully customizable website template designed specifically for small businesses. It features a simple and clean layout, with a built-in light/dark mode toggle to cater to user preferences. The template is fully responsive whether it's a desktop, tablet, or smartphone. The template is designed to serve as a starting point for small business websites, allowing clients to personalize the content and style to meet their specific needs. It showcases potential design ideas for clients, demonstrating how their business can have a professional and attractive online presence.",
  },
  {
    id: "pomodoro-timer",
    src: "/pomodoro.png",
    githubLink: "https://github.com/Dillonpw/pomodoro",
    title: "Pomodoro Timer Desktop Application",
    tags: ["TypeScript", "React", "Tailwind CSS", "Tauri", "Shadcn/ui"],
    challenge:
      "This was my first project using Tauri, and it involved some learning curves around the build and deployment processes. Despite these challenges, it was an exciting learning experience. I learned a lot about desktop app development, and while the initial setup was a bit confusing, I was ultimately able to create a functional application with a great deal of personal utility.",
    about:
      "A simple yet effective Pomodoro Timer desktop application built with Tauri, designed to help users improve productivity by following the Pomodoro technique. The app offers an intuitive UI, customizable time intervals, and an efficient timer mechanism. It was a great introduction to desktop application development, and it serves as a useful tool for staying focused and productive throughout the workday.",
  },
  {
    id: "recipe-book",
    src: "/recipes.png",
    src2: "/recipes-log.png",
    mobileImg: "/recipes-m.png",
    livePreviewLink: "https://recipe-book-sepia.vercel.app/",
    githubLink: "https://github.com/Dillonpw/recipe-book",
    title: "Recipe Book",
    tags: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Next.js",
      "Shadcn/ui",
      "Auth.js",
      "Prisma ORM",
      "Neon Postgres",
    ],
    challenge:
      "One of my first real full stack applications. I relied heavily on official docs for guidance with the API routes, authentication, database management, and schemas. Styles are fairly generic, but the point of the project wasn't to be a beautiful app; it was to make a utility tool.",
    about:
      "A full stack application built with Next.js app router and several other tools for both frontend and backend efficiency. The recipe book allows users to log in using OAuth, store their personal recipes, find other people's recipes, and use this app to read, find, and store recipes without the clutter of ads and blog posts on recipe websites.",
  },
];

export default images;
