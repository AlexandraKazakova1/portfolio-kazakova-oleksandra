import React from "react";
import aquaTrackImage from "../../img/aquatrack.jpg";
import lloydGefferson from "../../img/lloyd_jefferson.jpg";
import wathchcharm from "../../img//watchcharm.jpg";
import phonebook from "../../img/phonebook.jpg";
import WebStudio from "../../img/WebStudio.jpg";
import s from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={s.container_projects} id="projects">
      <h2 className={s.title_projects}>My Projects</h2>
      <div>
        <ul className={s.list_projects}>
          <li className={s.item_projects}>
            <h3 className={s.name_projects}>AquaTrack</h3>
            <img
              className={s.img_projects}
              src={aquaTrackImage}
              alt="project image"
            />
            <p>React.js, HTML5, CSS3, REST API, Node.js, GitHub</p>
            <div>
              <div className={s.container_projects_links}>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://github.com/elenka-lev/final-project-frontend-1"
                >
                  visit GitHub
                </a>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://final-project-frontend-taupe.vercel.app/"
                >
                  visit Website
                </a>
              </div>
            </div>
          </li>
          <li className={s.item_projects}>
            <h3 className={s.name_projects}>Lloyd Jefferson</h3>
            <img
              className={s.img_projects}
              src={lloydGefferson}
              alt="project image"
            />
            <p>React.js, HTML5, CSS3, REST API, GitHub, Redux.js</p>
            <div>
              <div className={s.container_projects_links}>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://github.com/Evhenii18/Our-group-js-project"
                >
                  visit GitHub
                </a>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://evhenii18.github.io/Our-group-js-project/index.html"
                >
                  visit Website
                </a>
              </div>
            </div>
          </li>
          <li className={s.item_projects}>
            <h3 className={s.name_projects}>Watchcharm</h3>
            <img
              className={s.img_projects}
              src={wathchcharm}
              alt="project image"
            />
            <p> HTML5, CSS3, GitHub, Node.js</p>
            <div>
              <div className={s.container_projects_links}>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://github.com/Evhenii18/html-project"
                >
                  visit GitHub
                </a>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://evhenii18.github.io/html-project/"
                >
                  visit Website
                </a>
              </div>
            </div>
          </li>
          <li className={s.item_projects}>
            <h3 className={s.name_projects}>PhoneBook</h3>
            <img
              className={s.img_projects}
              src={phonebook}
              alt="project image"
            />
            <p> React.js · React Hooks · Redux · Web Applications · Parcel</p>
            <div>
              <div className={s.container_projects_links}>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://github.com/AlexandraKazakova1/goit-react-hw-08"
                >
                  visit GitHub
                </a>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://goit-react-hw-08-rust-omega.vercel.app/"
                >
                  visit Website
                </a>
              </div>
            </div>
          </li>
          <li className={s.item_projects}>
            <h3 className={s.name_projects}>WebStudio</h3>
            <img
              className={s.img_projects}
              src={WebStudio}
              alt="project image"
            />
            <p> HTML5 · CSS3 · GitHub </p>
            <div>
              <div className={s.container_projects_links}>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://github.com/AlexandraKazakova1/goit-markup-hw-06"
                >
                  visit GitHub
                </a>
                <a
                  className={s.link_projects}
                  target="_blank"
                  href="https://alexandrakazakova1.github.io/goit-markup-hw-06/"
                >
                  visit Website
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
