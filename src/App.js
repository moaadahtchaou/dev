import React from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Port from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services";
import Info from "./components/Info/Info";
const App = () => {
  return (
    <>
      <Nav />
      <Info/>
      <Services />
      <Port/>
      <About />
      <Contact />
      <Footer />
      {/* <About />

      
      <Contact />
      
      <Services /> */}
    </>
  );
};

export default App;
