import React, { useState } from "react";
import aquaTrackImage from "../../img/aquatrack.jpg";
import lloydGefferson from "../../img/lloyd_jefferson.jpg";
import wathchcharm from "../../img//watchcharm.jpg";
import phonebook from "../../img/phonebook.jpg";
import WebStudio from "../../img/WebStudio.jpg";
import s from "./Projects.module.css";
import ProjectModal from "../ProjectModal/ProjectModal";

const projects = [
  {
    id: 1,
    title: "AquaTrack",
    image: aquaTrackImage,
    description: "React.js, HTML5, CSS3, REST API, Node.js, GitHub",
    github: "https://github.com/elenka-lev/final-project-frontend-1",
    website: "https://final-project-frontend-taupe.vercel.app/",
  },
  {
    id: 2,
    title: "Lloyd Jefferson",
    image: lloydGefferson,
    description: "React.js, HTML5, CSS3, REST API, GitHub, Redux.js",
    github: "https://github.com/Evhenii18/Our-group-js-project",
    website: "https://evhenii18.github.io/Our-group-js-project/index.html",
  },
  {
    id: 3,
    title: "Watchcharm",
    image: wathchcharm,
    description: "HTML5, CSS3, GitHub, Node.js",
    github: "https://github.com/Evhenii18/html-project",
    website: "https://evhenii18.github.io/html-project/",
  },
  {
    id: 4,
    title: "PhoneBook",
    image: phonebook,
    description: "React.js · React Hooks · Redux · Web Applications · Parcel",
    github: "https://github.com/AlexandraKazakova1/goit-react-hw-08",
    website: "https://goit-react-hw-08-rust-omega.vercel.app/",
  },
  {
    id: 5,
    title: "WebStudio",
    image: WebStudio,
    description: "HTML5 · CSS3 · GitHub",
    github: "https://github.com/AlexandraKazakova1/goit-markup-hw-06",
    website: "https://alexandrakazakova1.github.io/goit-markup-hw-06/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={s.container_projects} id="projects">
      <h2 className={s.title_projects}>My Projects</h2>
      <ul className={s.list_projects}>
        {projects.map((project) => (
          <li key={project.id} className={s.item_projects}>
            <div className={s.title_and_more}>
              <h3 className={s.name_projects}>{project.title}</h3>
              <button
                className={s.moreBtn}
                onClick={() => setSelectedProject(project)}
              >
                +
              </button>
            </div>
            <img
              className={s.img_projects}
              src={project.image}
              alt={project.title}
            />
            <p>{project.description}</p>
            <div className={s.container_projects_links}>
              <a
                className={s.link_projects}
                target="_blank"
                href={project.github}
              >
                visit GitHub
              </a>
              <a
                className={s.link_projects}
                target="_blank"
                href={project.website}
              >
                visit Website
              </a>
            </div>
          </li>
        ))}
      </ul>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
