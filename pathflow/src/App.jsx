import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./component/Button";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Benefits from "./component/Benefits";
import Collaboration from "./component/Collaboration";
import Services from "./component/Services";
import Pricing from "./component/Pricing";
import Roadmap from "./component/Roadmap";
import Footer from "./component/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="pt-[4.75em] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
