import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="px-6 py-6 bg-primary text-white">
        <hr className="opacity-30 border-gray-300" />
        <div className="flex flex-col md:flex-row gap-6 my-4 justify-between items-center text-left">
          <a
            href="https://github.com/vipulsc/projekt-saaraansh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-4 transition-all duration-300 text-primary/80 no-underline hover:underline hover:text-foreground/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.305 3.438 9.8 8.207 11.4.6.1.793-.26.793-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.56-1.42-1.37-1.8-1.37-1.8-1.12-.76.09-.74.09-.74 1.24.09 1.89 1.27 1.89 1.27 1.1 1.88 2.87 1.34 3.56 1.02.11-.8.43-1.34.79-1.65-2.77-.31-5.66-1.38-5.66-6.15 0-1.35.48-2.45 1.27-3.31-.13-.31-.55-.89.12-1.84 0 0 1.03-.33 3.39 1.26 1-.28 2.08-.42 3.14-.42s2.14.14 3.14.42c2.36-1.59 3.39-1.26 3.39-1.26.67.95.25 1.53.12 1.84.79.86 1.27 1.96 1.27 3.31 0 4.78-2.89 5.84-5.66 6.15.42.36.79.91.79 1.72 0 1.25-.01 2.26-.01 2.57 0 .32.19.69.8.58C20.563 21.8 24 17.305 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span className="my-auto">Github</span>
          </a>

          <a
            href="/"
            className="text-foreground my-auto font-medium no-underline hover:underline hover:underline-offset-4"
          >
            <span className="underline text-2xl underline-offset-8 text-gradient hover:underline-offset-8 font-extrabold cursor-pointer">
              SaaRaansH by VIPUL
            </span>
          </a>

          <a
            href="https://x.com/vipulsc1"
            className="text-primary/80 my-auto font-medium flex items-center transition-all duration-300 no-underline hover:underline hover:text-foreground/80"
          >
            Follow on{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              className="w-8 h-8 mr-2"
            >
              <path
                d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                fill="white"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
