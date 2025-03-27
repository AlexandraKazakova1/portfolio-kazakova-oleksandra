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
    description_modal:
      "AquaTrack is a web application designed to help users monitor their daily water intake and maintain hydration goals. The platform allows users to log their water consumption, set personalized hydration targets, and track progress through intuitive visualizations.The system consists of a robust backend with a RESTful API and a responsive frontend for an optimal user experience.This is a group project.My role: I developed core back- end functionalities using Node.js, Express.js, and MongoDB, implementing Google OAuth authentication, JWT - based security, and optimized API endpoints for user data and hydration tracking.I also enhanced error handling and refactored the code for better scalability. On the front-end, I worked with React.js and Redux, integrating Google OAuth authentication, improving state management, and ensuring seamless API communication. I also enhanced the UI's responsiveness and accessibility, fixed bugs, and optimized performance for a smoother user experience. ",
  },
  {
    id: 2,
    title: "Lloyd Jefferson",
    image: lloydGefferson,
    description: "React.js, HTML5, CSS3, REST API, GitHub, Redux.js",
    github: "https://github.com/Evhenii18/Our-group-js-project",
    website: "https://evhenii18.github.io/Our-group-js-project/index.html",
    description_modal:
      "Team project. This is a developer portfolio with a responsive layout, modal windows and attractive design. Role: Developer section Hero.",
  },
  {
    id: 3,
    title: "Watchcharm",
    image: wathchcharm,
    description: "HTML5, CSS3, GitHub, Node.js",
    github: "https://github.com/Evhenii18/html-project",
    website: "https://evhenii18.github.io/html-project/",
    description_modal:
      "Team project. This is the site of a company that sells watches, and it is completely customer-oriented, so the site is adaptive and easy to use. Role: Developer section Hero.",
  },
  {
    id: 4,
    title: "PhoneBook",
    image: phonebook,
    description: "React.js · React Hooks · Redux · Web Applications · Parcel",
    github: "https://github.com/AlexandraKazakova1/goit-react-hw-08",
    website: "https://goit-react-hw-08-rust-omega.vercel.app/",
    description_modal:
      "This was an individual project where I developed a dynamic phonebook application using React. Below are the key tasks I completed:Designed and implemented a phonebook application that allows users to manage their contacts seamlessly.Leveraged React hooks, including useState and useEffect, for efficient state management and handling side effects.Built core functionalities such as adding, searching, and deleting contacts, ensuring an interactive and user-friendly experience.Focused on creating reusable components and applied CSS styling to achieve a responsive and visually appealing design.Key Skills Used: React Hooks · React.js · Redux.js · Web Applications · Parcel",
  },
  {
    id: 5,
    title: "WebStudio",
    image: WebStudio,
    description: "HTML5 · CSS3 · GitHub",
    github: "https://github.com/AlexandraKazakova1/goit-markup-hw-06",
    website: "https://alexandrakazakova1.github.io/goit-markup-hw-06/",
    description_modal:
      "This is the website of a company that develops websites and helps customers sell their goods and services better. Individual project. This is the website of a company that develops websites and helps customers sell their goods and services better. Individual project. Skills: HTML5 · CSS3 · GitHub · Education",
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
