const Scroll = () => {
  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div className="flex min-w-full overflow-hidden">
        <div className="flex min-w-full animate-marquee items-center justify-around">
          {["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"].map(
            (text, index) => (
              <div key={index}>
                <p>{text}</p>
              </div>
            ),
          )}
        </div>
        <div className="flex min-w-full animate-marquee items-center justify-around">
          {["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"].map(
            (text, index) => (
              <div key={index}>
                <p>{text}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
