import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.container_about} id="about">
      <h2 className={s.about_title}>About me</h2>
      <p className={s.about_text}>
        Hi! I’m Oleksandra, a passionate front-end developer dedicated to
        crafting modern and responsive web solutions. With a strong foundation
        in HTML, CSS, JavaScript, and React, I continuously expand my skills to
        stay ahead in the ever-evolving world of web development. I have
        experience working on both individual and team projects, building
        user-friendly and adaptive interfaces. I thrive on challenges, enjoy
        teamwork, and love solving complex problems. To me, every pixel matters,
        and well-structured code is an art form. I'm always eager to take on new
        opportunities and exciting projects!
      </p>
      <h2 className={s.about_title}>Tech Skills</h2>
      <div className={s.tech_skills}>
        <ul className={s.tech_skills_list}>
          <h3 className={s.about_min_title}>Front-end Development:</h3>
          <li>
            HTML5 & CSS3 - Crafting clean, semantic markup and styling for
            modern web interfaces
          </li>
          <li>
            SASS & CSS Preprocessors - Writing scalable and maintainable styles
            with reusable components
          </li>
          <li>
            JavaScript (ES6+) - Implementing dynamic functionality and
            interactivity
          </li>
          <li>
            React.js & React Hooks - Building modular, reusable UI components
            and managing state effectively
          </li>
          <li>Redux.js - Handling complex application state and data flow</li>
        </ul>
        <ul className={s.tech_skills_list}>
          <h3 className={s.about_min_title}>
            Back-end & Full-stack Development:
          </h3>

          <li>Node.js - Developing server-side logic and APIs</li>
          <li>MongoDB - Managing and structuring NoSQL databases</li>
        </ul>
        <ul className={s.tech_skills_list}>
          <h3 className={s.about_min_title}>Tools & Workflow:</h3>

          <li>Git & GitHub - Version control and collaborative development</li>
          <li>
            Webpack & Parcel - Optimizing and bundling assets for performance
          </li>
          <li>Handlebars - Creating reusable templates for dynamic content</li>
        </ul>
      </div>
      <p className={s.about_text}>
        I'm always eager to embrace new technologies and challenges, whether
        it's improving performance, optimizing UI/UX, or diving deeper into
        full-stack development.
      </p>
    </div>
  );
};

export default About;
