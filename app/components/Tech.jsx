import { motion } from "framer-motion";

const Tech = () => {
  const devTools = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Astro",
    "Next",
    "PostgresSQL",
    "Prisma"
  ];
  const otherTools = [
    "Git",
    "VS Code",
    "Vite",
    "Prisma",
    "Figma",
    "GitHub",
    "Vercel",
    "Expo",
    "Tauri",
  ];

  const learning = ["Htmx", "Svelte", "Flutter"];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      id="tech"
      className="flex items-center justify-center p-10 text-center md:mb-20"
    >
      <div className="mt-10 flex flex-col gap-20">
        <div>
          <p className="pb-2 font-mono text-5xl font-bold">Current Stack</p>
          <ul className="flex list-none items-center justify-center gap-5 pt-5 text-xl lg:flex-row">
            {devTools.map((dt) => (
              <li className="opacity-50" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 font-mono text-5xl font-bold">Other Tools</p>
          <ul className="flex list-none items-center justify-center gap-5 pt-5 text-xl lg:flex-row ">
            {otherTools.map((ot) => (
              <li className="opacity-50" key={ot}>
                {ot}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 font-mono text-5xl font-bold">Coming Soon</p>
          <ul className="flex  list-none items-center justify-center gap-5 pt-5 text-xl lg:flex-row">
            {learning.map((le) => (
              <li className="opacity-50" key={le}>
                {le}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;
