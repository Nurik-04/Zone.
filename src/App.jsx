import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Service from "./Components/Service/Service";
import Projects from "./Components/Project/Project";
import Team from "./Components/Team/Team";

import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Service />
        <Projects />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
