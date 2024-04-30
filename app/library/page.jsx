<motion.main
className="bg-gradient-to-br from-gray-300 to-emerald-400 text-slate-900 dark:bg-gradient-to-br dark:from-sky-950 dark:to-slate-900 dark:text-cyan-200"
initial={{ opacity: 0 }}
transition={{ duration: 1 }}
whileInView={{ opacity: 1 }}
>
<div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
  <Link
    href="/"
    id="logo"
    className="justify-start px-2 hover:scale-105"
  >
    <Image className="" src={logo} alt="Logo" />
  </Link>
  <ThemeToggle />
  <p>component library test</p>
</div>
</motion.main>