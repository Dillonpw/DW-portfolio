import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Links() {
  const buttonVariants = {
    initial: { opacity: 0 },
    animate: (index) => ({
      opacity: 1,
      y: [-30, 0],
      transition: {
        type: "spring",
        damping: 8,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-2 flex items-center justify-center gap-4"
    >
      {[
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
      ].map((link, index) => (
        <motion.div
          key={link.href}
          custom={index}
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <Button
            className="w-24 font-bold text-black"
            variant="default"
            asChild
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        </motion.div>
      ))}
    </motion.section>
  );
}
