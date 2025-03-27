import React from "react";
import s from "./Modal.module.css";

const Modal = ({ toggleModal }) => {
  const handleBackgroundClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div className={s.header_modal} onClick={handleBackgroundClick}>
      <nav className={s.modal_nav}>
        <a href="../Hero/Hero.jsx" className={s.logo}>
          Oleksandra Kazakova
        </a>
        <ul className={s.modal_list}>
          <li>
            <a href="#about" className={s.modal_link}>
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className={s.modal_link}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contacts" className={s.modal_link}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
