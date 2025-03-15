import React from "react";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <div className="bg-[#121212]">
      <Header />
      <main className="pt-15">
        <Intro />
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  );
};

export default App;
