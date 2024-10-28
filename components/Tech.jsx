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
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: 0 }}
      className="mb-10 mt-10  text-center md:mb-6"
    >
      <p className="mb-2 text-xl font-bold lg:text-2xl">Working with</p>
      <div className="relative hidden flex-col justify-center overflow-hidden  md:flex">
        <div className="pointer-events-none relative flex overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee list-none items-center justify-around">
            {devTools.map((dt, index) => (
              <li className="p-2 opacity-60" key={index}>
                {dt}
              </li>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex min-w-full shrink-0 animate-marquee list-none items-center justify-around"
          >
            {devTools.map((dt, index) => (
              <li className="p-2 opacity-60" key={index}>
                {dt}
              </li>
            ))}
          </div>
        </div>
      </div>
      {/* small screens */}
      <div className="flex flex-col items-center justify-center gap-6 md:hidden">
        <div>
          <ul className="text-md mx-6 flex list-none flex-row flex-wrap items-center justify-center gap-3 pt-2 lg:mx-40 xl:px-60 xl:text-xl">
            {devTools.map((dt) => (
              <li className="opacity-60" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;
