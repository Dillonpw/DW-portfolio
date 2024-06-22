import { motion } from "framer-motion";

const Tech = () => {
  const devTools = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Astro",
    "Next",
    "PostgresSQL",
    "Prisma",
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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      id="tech"
      className="flex mt-40 items-center justify-center p-10 text-center md:mb-20"
    >
      <div className="flex flex-col gap-20">
        <div>
          <p className="pb-2 font-mono text-3xl font-bold lg:text-5xl">
            Tech Stack
          </p>
          <ul className="flex list-none flex-col items-center justify-center gap-5 pt-5 text-xl lg:flex-row">
            {devTools.map((dt) => (
              <li className="opacity-50" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 font-mono text-3xl font-bold lg:text-5xl">
            Other Tools
          </p>
          <ul className="flex list-none flex-col items-center justify-center gap-5 pt-5 text-xl lg:flex-row ">
            {otherTools.map((ot) => (
              <li className="opacity-50" key={ot}>
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
