import React from "react";
import Hero from "./components/Hero";
import Show from "./components/Show";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="text-white">hello</div>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="app">
          <Hero></Hero>
          <Show></Show>
        </div>
      </main>
    </>
  );
};

export default App;
