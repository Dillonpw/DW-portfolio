const Footer = () => {
  return (
    <>
      <footer className="mt-60 flex flex-col items-center justify-center pb-6 text-center text-sm xl:px-80 xl:text-lg">
        <p className="mx-6">
          Built using <b className="text-emerald-500/90">React</b>,{" "}
          <b className="text-emerald-500/90">Next.JS</b> and{" "}
          <b className="text-emerald-500/90">Tailwind</b>, with some elements
          designed in <b className="text-emerald-500/90">Figma</b>
          <br />
          &copy;2024 All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
