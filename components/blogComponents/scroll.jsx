const Scroll = () => {
  return (
    <div className="flex overflow-hidden">
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
