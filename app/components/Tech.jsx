import { motion } from "framer-motion";

const Tech = () => {
  const devTools = [
    "TypeScript",
    "JavaScript",
    "React",
    "React Native",
    "Node",
    "Tailwind CSS",
    "Astro",
    "Next",
    "Express",
  ];
  const otherTools = [
    "Git",
    "VS Code",
    "Vite",
    "Figma",
    "GitHub",
    "Vercel",
    "Expo",
    "Tauri",
  ];

  const learning = ["Python", "PostgreSQL", "MongoDB", "Svelte", "Flutter"];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      id="tech"
      className="flex flex-col items-center justify-center p-10 md:mb-40 text-center"
    >
      <div className="flex flex-col gap-20">
        <div>
          <p className="pb-2 font-mono text-3xl font-bold">Current Stack</p>
          <ul className="list-none flex flex-shrink-0 text-xl pt-5 gap-5 items-center justify-center flex-col lg:flex-row">
            {devTools.map((dt) => (
              <li className="opacity-50" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 font-mono text-3xl font-bold">Other Tools</p>
          <ul className="list-none flex flex-shrink-0 text-xl pt-5 gap-5 items-center justify-center flex-col lg:flex-row ">
            {otherTools.map((ot) => (
              <li className="opacity-50" key={ot}>
                {ot}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 font-mono text-3xl font-bold">Coming Soon</p>
          <ul className="list-none flex flex-shrink-0 text-xl pt-5 gap-5 items-center justify-center flex-col lg:flex-row">
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
