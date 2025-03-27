import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
