import React from "react";
import s from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <img className={s.modalImg} src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <div className={s.modalLinks}>
          <a className={s.link_projects} target="_blank" href={project.github}>
            GitHub
          </a>
          <a className={s.link_projects} target="_blank" href={project.website}>
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
