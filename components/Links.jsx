import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Links() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: -30 }}
      className="mt-10 flex items-center justify-center gap-4"
    >
      {/* <Button className="w-24 font-bold" variant="default" asChild>
        <Link href="https://blog.dillonwalsh.com">Blog</Link>
      </Button> */}
      <Button className="w-24 font-bold " variant="default" asChild>
        <Link href="/projects">Projects</Link>
      </Button>
    </motion.section>
  );
}
