import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

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
      </main>
      <footer>
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
