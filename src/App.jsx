import React from "react";
import Hero from "./components/Hero";
import Show from "./components/Show";
import Nav from "./components/Nav";

import "./App.css";
const App = () => {
  return (
    <>
      <div className="font-[Space_Mono] tracking-widest">
        {/* <span className="bg-black mb-2 ">
        <div
          className="text-white  mb-2 scrolling-marquee"
          onClick={() => window.open("https://github.com/vipulsc", "_blank")}
        >
          ⚡ Crafted with chaos & caffeine — Drop a ⭐ if you feel the vibe!
        </div>
      </span> */}
        <div
          class="overflow-hidden cursor-pointer bg-black text-white p-2 mb-3"
          onClick={() => window.open("https://github.com/vipulsc", "_blank")}
        >
          <div class="text-center text-xs sm:text-lg md:text-lg ">
            {/* ⚡ Crafted with chaos & caffeine — */}
            Drop a ⭐ if you feel the vibe!
          </div>
        </div>

        <main>
          <div className="app">
            <Nav></Nav>
            <Hero></Hero>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
