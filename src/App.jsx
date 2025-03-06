import React from "react";
import Header from "./components/Header";
import Intro from "./pages/Intro";

const App = () => {
  return (
    <div>
      <Header />
      <main className="pt-15">
        <Intro />
      </main>
    </div>
  );
};

export default App;
