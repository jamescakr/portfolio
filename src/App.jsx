import React from "react";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import About from "./pages/About";

const App = () => {
  return (
    <div className="bg-[#121212]">
      <Header />
      <main className="pt-15">
        <Intro />
        <About />
      </main>
    </div>
  );
};

export default App;
