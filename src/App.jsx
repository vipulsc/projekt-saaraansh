import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="font-[Space_Mono] tracking-widest min-h-screen flex flex-col">
        <div
          className="overflow-hidden cursor-pointer bg-black text-white p-2 mb-3"
          onClick={() => window.open("https://github.com/vipulsc", "_blank")}
        >
          <div className="text-center text-xs sm:text-lg md:text-lg ">
            Drop a ⭐ if you feel the vibe!
          </div>
        </div>

        <main className="flex-grow">
          <div className="app">
            <Nav />
            <Hero />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default App;
