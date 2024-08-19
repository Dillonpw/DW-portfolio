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
    "Selenium",
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
    "Vercel",
    "AWS",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="mt-10 flex items-center justify-center px-10 text-center"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <div>
          <p className="text-xl font-bold lg:text-2xl">Working with</p>
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
