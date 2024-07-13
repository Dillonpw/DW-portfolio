import NavBar from "./nav.jsx";
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
      <main>
      <NavBar />

        <Header />
        <button
          id="arrow"
          onClick={scrollTop}
          className="button-bounce fixed bottom-4 right-10 z-50 hidden h-1 w-1 items-center justify-center rounded-full bg-emerald-400 p-4 text-black  hover:opacity-60 md:flex"
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
