const images = [
  {
    id: "ecommerce-site",
    src: "/ecommerce.png",
    mobileImg: "/ecommerce-m.png",
    livePreviewLink: "https://shop-red-eta.vercel.app/",
    githubLink: "https://github.com/Dillonpw/ecommerce",
    title: "Ecommerce Site",
    tags: ["TypeScript", "React", "Tailwind", "TailwindUI", "Shadcn/ui"],
    challenge:
      "This project was rather large and with that came some challenges: for one I struggled a bit with sharing state between components and pages, I failed to realize that the concept I was inventing in my head and almost in my code already existed in the form of useContex... Once that was out of the way I found some difficulty in positioniing certain elements exactly where I wanted them so they looked presentable both on desktop and mobile but a few tailwind size adjustements sorted that out.",
    about:
      "This template is part of The Odin Project React curriculum You will notice a checkout area if you decide to go through te motions of the website, it does not submit anything, it clears the cart. Engaging in this project introduced me to many new concepts within React. I dove headfirst into the useContext hook and scoured the React documentation to gain what I believe is a working grasp of its uses. In the end, I am happy with the outcome. The goal was to create something purposely generic and minimal, and I believe that’s what I have achieved.",
  },

  {
    id: "dispatcher-cheat-sheet",
    src: "/DCS-home.png",
    mobileImg: "/DCS-home-m.png",
    livePreviewLink: "https://www.911dcs.net/",
    githubLink: "https://github.com/Dillonpw/DCS",
    title: "Dispatcher Cheat Sheet",
    tags: ["TypeScript", "React", "CSS", "Astro"],
    challenge:
      " I originally built this project using vanilla JavaScript, and after deciding to build the project up a bit I wanted to challenge myself and covert it to TypeScript for some practice. This was the first project I built using TypeScript and I struggled a bit at first with typing things correctly and sometimes skipped types but as I moved through the documentation things becmae clear and the error responses turned into a tool as I converted the code.",
    about:
      "A live and public site with returning users, styled with a brutaslist theme in mind. Consisting of a few useful tools for 911 dispatchers, a job I worked for several years. I built the app to help with my efficiency as a dispatcher and as a send off gift to my former coworkers. The primary funciton is a work schedule generator. As a 911 dispatcher, my schedule was different every week due to the need for 24/7 uptime, and to prevent the same poeple from always working weekends we worked on a rotation of 4 work days followed by 3 days off, which required a great deal of effort to schedule anything in advance. I plan to add more tools to the page as they come to mind and offer this project up to other 911 dispatchers to hopefully make their jobs and lives easier as well.",
  },
  {
    id: "pomodoro-timer-app",
    src: "/pomodoro.png",
    githubLink: "https://github.com/Dillonpw/pomodoro",
    title: "Pomodoro Timer App",
    tags: ["TypeScript", "React", "Tailwind", "Tauri"],
    challenge:
      "This project did not pose much in the way of challeneges outside of making sure the countdown functioned as expected, I spent most of the time on this project making sure the UI was both noticeable but not a distraction to the user by choosing neutral colors and a visible change between work-time and break-time.",
    about:
      "A simple but daily use Pomodoro Timer for productivity and time management consisting of an indicator, an active timer, two buttons and two inputs. Designed to take up very little desktop space and a basic UI to avoid being a distraction. The App loads quickly and begins counting on load, unless directed to reset and the allow for time adjustment.",
  },
];

export default images;
