import { useState } from "react";

const Nav = () => {
  const [text, setText] = useState("SaaRaansH");

  const handleClick = () => {
    setText((prevText) => (prevText === "SaaRaansH" ? "सारांश" : "SaaRaansH"));
  };
  return (
    <div>
      <nav
        className="flex place-content-between 
		p-7
	  items-center "
      >
        <div>
          <img
            src="swap.svg"
            className="cursor-pointer w-14 h-14"
            alt="S"
            onClick={handleClick}
          />
        </div>
        <div>
          <p
            className="text-gradient relative inline-block text-4xl sm:text-5xl md:text-6xl pr-4 sm:pr-6 md:pr-9 
              after:absolute after:bottom-0 after:right-0 after:h-[3px] after:w-full
              after:bg-amber-300 after:origin-right after:scale-x-0 
              after:transition-transform after:duration-500 hover:after:scale-x-100"
          >
            <span
              className={text === "सारांश" ? "font-sans" : ""}
              onClick={() => window.location.reload()}
            >
              {text}
            </span>
          </p>
        </div>
      </nav>
      <div className="flex flex-col text-center mt-14 mb-14 pl-2 pr-2">
        <div className="text-xl md:text-3xl text-primary/80">
          Elevate your reading with{" "}
          <span className="underline text-gradient hover:underline-offset-4 font-extrabold cursor-pointer">
            SaaRaansH
          </span>
          , your powerful open-source AI summarizer <br />
          <p className="font-semibold">
            {" "}
            Designed to streamline content effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
