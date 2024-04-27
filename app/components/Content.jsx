import Header from "./Header.jsx";
import Projects from "./Projects.jsx";
import MoreInfo from "./moreInfo.jsx";
import Tech from "./Tech.jsx";


const Content = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className="relative min-h-full bg-gradient-to-br from-gray-300 to-emerald-400 p-0 text-slate-900 dark:bg-gradient-to-br dark:from-sky-950 dark:to-slate-900 dark:text-cyan-200">
        <Header />

        <button
          id="arrow"
          onClick={scrollTop}
          className="button-bounce fixed bottom-4 right-10 z-50 hidden h-1 w-1 items-center justify-center rounded-full bg-cyan-200 p-4 text-black hover:bg-cyan-200 hover:opacity-60 md:flex"
          aria-label="Scroll to top"
        >
          &uarr;
        </button>

        <Projects />
        <Tech />
        <MoreInfo />
      </main>
    </>
  );
};
export default Content;
