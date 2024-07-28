import { motion } from "framer-motion";

const Tech = () => {
  const devTools = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Astro",
    "Next",
    "Supabase",
    "Prisma",
    "PostgresSQL",
    "Express",
  ];
  const otherTools = [
    "Git",
    "Vite",
    "Figma",
    "Expo",
    "Tauri",
    "Drizzle",
    "VS Code",
    "GitHub",
    "Vercel",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      id="tech"
      className="m-20 flex items-center justify-center p-10 text-center md:mb-20"
    >
      <div className="flex flex-col gap-20 mt-20">
        <div>
          <p className="pb-2 text-2xl font-bold lg:text-3xl">Daily Use</p>
          <ul className="flex list-none flex-col flex-wrap items-center justify-center gap-5 pt-5 text-lg lg:flex-row">
            {devTools.map((dt) => (
              <li className="opacity-60" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-nowrap pb-2 text-2xl font-bold lg:text-3xl">
            Other Tools
          </p>
          <ul className="flex list-none flex-col items-center justify-center gap-5 pt-5 text-lg lg:flex-row ">
            {otherTools.map((ot) => (
              <li className="opacity-60" key={ot}>
                {ot}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;
