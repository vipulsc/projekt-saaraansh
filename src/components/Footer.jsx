import React from "react";
import { Github, X } from "lucide-react"; // importing icons

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="px-6 py-6 bg-primary text-white">
        <hr className="opacity-30 border-gray-300" />
        <div className="flex flex-col md:flex-row gap-6 my-4 justify-between items-center text-left">
          {/* GitHub Link */}
          <a
            href="https://github.com/vipulsc/projekt-saaraansh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 transition-all duration-300 text-primary/80 no-underline hover:underline hover:text-foreground/80"
          >
            <Github className="w-8 h-8" />
            <span className="my-auto">GitHub</span>
          </a>

          {/* SaaRaansH title */}
          <a
            href="/"
            className="text-foreground my-auto font-medium no-underline hover:underline hover:underline-offset-4"
          >
            <span className="underline text-2xl underline-offset-8 text-gradient hover:underline-offset-8 font-extrabold cursor-pointer">
              SaaRaansH by VIPUL
            </span>
          </a>

          {/* X/Twitter Link */}
          <a
            href="https://x.com/vipulsc1"
            target="_blank"
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
