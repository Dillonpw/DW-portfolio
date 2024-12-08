const Scroll = () => {
  return (
    <div className="my-4 flex overflow-hidden rounded-xl border-4 px-10">
      <div className="flex min-w-full animate-marquee justify-around">
        {["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"].map(
          (text, index) => (
            <div key={index}>
              <p>{text}</p>
            </div>
          ),
        )}
      </div>
      <div className="flex min-w-full animate-marquee justify-around">
        {["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"].map(
          (text, index) => (
            <div key={index}>
              <p>{text}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Scroll;
