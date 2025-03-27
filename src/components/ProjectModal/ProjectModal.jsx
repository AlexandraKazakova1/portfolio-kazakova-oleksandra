import React, { useState, useEffect } from "react";
import s from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`${s.modalOverlay} ${isVisible ? s.show : ""}`}
      onClick={handleClose} // Викликаємо handleClose для коректного закриття
    >
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={handleClose}>
          &times;
        </button>
        <h2>{project?.title}</h2> {/* Безпечний доступ */}
        <img className={s.modalImg} src={project?.image} alt={project?.title} />
        <p className={s.modal_text}>{project?.description_modal}</p>
        <div className={s.modalLinks}>
          {project?.github && (
            <a
              className={s.link_projects}
              target="_blank"
              href={project.github}
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project?.website && (
            <a
              className={s.link_projects}
              target="_blank"
              href={project.website}
              rel="noopener noreferrer"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
