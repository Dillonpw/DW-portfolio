import { motion } from 'framer-motion'

const Tech = () => {
  const devTools = [
    'TypeScript',
    'JavaScript',
    'React',
    'React Native',
    'Node',
    'Tailwind CSS',
    'Astro',
    'Next',
    'Express',
  ]
  const otherTools = [
    'Git',
    'VS Code',
    'Vite',
    'Figma',
    'GitHub',
    'Vercel',
    'Expo',
    'Tauri',
  ]

  const learning = ['Python', 'PostgreSQL', 'MongoDB', 'Svelte', 'Flutter']

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      id="tech"
      className="mb-20 flex flex-col items-center justify-center rounded-md p-10 text-center md:mb-40"
    >
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-10 pt-10 text-xl sm:grid-cols-1 md:grid-cols-3">
        <div>
          <p className="pb-2 text-3xl font-bold">Building with</p>
          <ul className="list-none space-y-2">
            {devTools.map((dt) => (
              <li className="opacity-50" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-3xl font-bold">Tools I Use</p>
          <ul className="list-none space-y-2">
            {otherTools.map((ot) => (
              <li className="opacity-50" key={ot}>
                {ot}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-3xl font-bold">What I&apos;m studying</p>
          <ul className="list-none space-y-2">
            {learning.map((le) => (
              <li className="opacity-50" key={le}>
                {le}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default Tech
