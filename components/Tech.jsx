import { motion } from "framer-motion";

const Tech = () => {
  const devTools = [
    "Playwright",
    "TypeScript",
    "React",
    "VS Code",
    "Tailwind CSS",
    "PostgresSQL",
    "Git",
    "Vite",
    "Express",
    "Figma",
    "Expo",
    "Astro",
    "Next",
    "Supabase",
    "Prisma",
    "Tauri",
    "Drizzle",
    "GitHub",
    "Vercel",
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
          <ul className="text-md mx-6 xl:text-xl flex list-none flex-row flex-wrap items-center justify-center gap-3 pt-2 lg:mx-40 xl:px-60">
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
