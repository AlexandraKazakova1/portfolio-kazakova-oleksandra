import React from "react";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.container_hero}>
      <h1 className={s.title}>Hello, I'am Fullstack developer</h1>
      <p className={s.text}>I invite you to see my projects</p>
    </div>
  );
};

export default Hero;
