const images = [
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
      "Prisma",
      "Neon Postgres",
    ],
    challenge:
      "One of my first real full stack applications. relied heavily on official docs for guidance with the API routes, authentication, Database management and schemas. Styles are farily generic, but the point of the project wasn't to be a beautiful app, it was to make a utility tool. ",
    about: "A full stack application built with next.js app router and several other tools for both frontend and backend efficiency, the recipe book allows users to log in using OAuth, store their personal recipes, find other peoples recipes and use this app to read, find and store recipes without the clutter of ads and blog posts on recipe websites.",
  },
  {
    id: "ecommerce-site",
    src: "/ecommerce.png",
    src2: "/ecommerce-2.png",
    mobileImg: "/ecommerce-m.png",
    livePreviewLink: "https://shop-red-eta.vercel.app/",
    githubLink: "https://github.com/Dillonpw/ecommerce",
    title: "Ecommerce Site",
    tags: ["TypeScript", "React", "Tailwind CSS", "TailwindUI", "Shadcn/ui"],
    challenge:
      "This project was rather large and with that came some challenges: for one I struggled a bit with sharing state between components and pages, I failed to realize that the concept I was inventing in my head and almost in my code already existed in the form of useContex... Once that was out of the way I found some difficulty in positioniing certain elements exactly where I wanted them so they looked presentable both on desktop and mobile but a few tailwind size adjustements sorted that out.",
    about:
      "You will notice a checkout area if you decide to go through te motions of the website, it does not submit anything, it clears the cart. Engaging in this project introduced me to many new concepts within React. I dove headfirst into the useContext hook and scoured the React documentation to gain what I believe is a working grasp of its uses. In the end, I am happy with the outcome. The goal was to create something purposely generic and minimal, and I believe that’s what I have achieved.",
  },

  {
    id: "small-bis",
    src: "/small-bis.png",
    mobileImg: "/small-bis-m.png",
    livePreviewLink: "https://t1.dillonwalsh.com/",
    githubLink: "https://github.com/Dillonpw/small-bis",
    title: "Small Business Template",
    tags: ["TypeScript", "React", "Tailwind CSS", "Astro"],
    challenge:
      "This project was another valuable learning experience in using Astro, my favorite framework for static site generation and server-side rendering. One of the primary challenges was ensuring the UI design was both precise and aesthetically pleasing, which required attention to detail and careful planning. Additionally, integrating TypeScript and ensuring the template was fully responsive across different devices were significant tasks that demanded thorough testing and iteration.",
    about:
      "This is a fully customizable website template designed specifically for small businesses. It features a simple and clean layout, with a built-in light/dark mode toggle to cater to user preferences. The template is fully responsive whether it's a desktop, tablet, or smartphone. The template sis designed to serve as a starting point for small business websites, allowing clients to personalize the content and style to meet their specific needs. It showcases potential design ideas for clients, demonstrating how their business can have a professional and attractive online presence.",
  },

  {
    id: "pomodoro-timer-app",
    src: "/pomodoro.png",
    githubLink: "https://github.com/Dillonpw/pomodoro",
    title: "Pomodoro Timer App",
    tags: ["TypeScript", "React", "Tailwind CSS", "Tauri"],
    challenge:
      "This project did not pose much in the way of challeneges outside of making sure the countdown functioned as expected, I spent most of the time on this project making sure the UI was both noticeable but not a distraction to the user by choosing neutral colors and a visible change between work-time and break-time.",
    about:
      "A simple but daily use Pomodoro Timer for productivity and time management consisting of an indicator, an active timer, two buttons and two inputs. Designed to take up very little desktop space and a basic UI to avoid being a distraction. The App loads quickly and begins counting on load, unless directed to reset and the allow for time adjustment.",
  },

  {
    id: "dcs-m",
    src: "/dcs-m.png",
    githubLink: "https://github.com/Dillonpw/DCS-M",
    title: "Dispatcher Cheat Sheet iOS app",
    tags: ["TypeScript", "React Native", "Tailwind CSS", "Expo Router"],
    about:
      "A modern, mobile version of the Dispatcher Chest Sheet website built using Nativewind for styles simple and minimal UI designed to be for quick referencing. So far the rotating schedule function id the primary aspect, but there are more features on the way.",
    challenge:
      "At the time, mobile development was entirely new to me, this is my first fully-fledged mobile application. I ran into some confusion at the start of the process as I learned the React Native specific elements, but once that clicked the adjustment to mobile was straight forward.",
  },

];

export default images;
