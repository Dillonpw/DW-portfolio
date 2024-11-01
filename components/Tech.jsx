"use client";

import { motion } from "framer-motion";

const Tech = () => {
  const devTools = [
    "TypeScript",
    "React",
    "Node.JS",
    "Python",
    "Tailwind CSS",
    "Express",
    "Playwright",
    "Vitest",
    "VS Code",
    "PostgresSQL",
    "Git",
    "Astro",
    "Next",
    "Supabase",
    "Prisma",
    "Drizzle",
    "GitHub",
    "Vite",
    "Stripe",
    "Vercel",
    "Netlify",
    "AWS",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 1, delay: 0.5 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: 0 }}
      className="my-10 text-center md:mb-6"
    >
      <h2 className="mb-4 text-xl font-bold lg:text-2xl">Working with</h2>
      <div className="relative hidden md:block">
        <div className="pointer-events-none relative flex overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around">
            {devTools.map((dt, index) => (
              <span className="mx-4 opacity-60" key={index}>
                {dt}
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex min-w-full shrink-0 animate-marquee items-center justify-around"
          >
            {devTools.map((dt, index) => (
              <span className="mx-4 opacity-60" key={index}>
                {dt}
              </span>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
      </div>
      <div className="md:hidden">
        <ul className="flex flex-wrap items-center justify-center gap-3 px-4">
          {devTools.map((dt) => (
            <li className="opacity-60" key={dt}>
              {dt}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Tech;
