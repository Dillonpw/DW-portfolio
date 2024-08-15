import NavBar from "./nav.jsx";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Tech from "./Tech.jsx";
import MoreInfo from "./moreInfo.jsx";
const Content = () => {
  return (
    <>
      <main className="xl:text-xl">
        <NavBar />
        <Header />
        <About />
        <Tech />
        <MoreInfo />
      </main>
    </>
  );
};
export default Content;
